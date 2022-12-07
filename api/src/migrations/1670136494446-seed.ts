import { readFileSync } from "fs";
import { MigrationInterface, QueryRunner } from "typeorm";
import { Post } from "../posts/post.entity";
import { Channel } from "../channels/channel.entity";
import { Website } from "../websites/website.entity";
import { Video } from "../videos/video.entity";
import { Music } from "../music/music.entity";
import * as WPAPI from 'wpapi';
import * as _ from 'lodash';
import { Category } from "src/categories/category.entity";
import { File } from "src/files/files.entity";

function getAll( request ) {
  return request.then(function( response ) {
    if ( ! response._paging || ! response._paging.next ) {
      return response;
    }
    // Request the next page and return both responses as one collection
    return Promise.all([
      response,
      getAll( response._paging.next )
    ]).then(function( responses ) {
      return _.flatten( responses );
    });
  });
}
// Kick off the request

const MUSIC_CAT = 37;

export class Seed1670136494446 implements MigrationInterface {
    name = 'Seed1670136494446';
  
    public async up(queryRunner: QueryRunner): Promise<void> {
      const wp = await WPAPI.discover('https://fckr.cloud/wp-json/');
      const files = await getAll( wp.media() )
      try {
        await queryRunner.startTransaction();
        files.map(async post => {
          await queryRunner.manager.insert(File, {
            title: post.title.rendered,
            link: post.slug,
            file_id: post.id,
            post_id: post.post,
            url: post.yoast_head_json.og_url,
            s3Key: post.media_details.file,
            mime: post.mime_type,
          });
        });
        await queryRunner.commitTransaction();
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
      }
      const posts = await getAll( wp.posts() )
      try {
        await queryRunner.startTransaction();
        posts.map(async post => {
          if (post.status == 'publish') {
            switch(post.type) {
              case 'post':
                await queryRunner.manager.insert(Post, {
                  title: post.title.rendered,
                  link: post.slug,
                  date: post.date.split('T')[0].replace(/-/g,'/'),
                  post_id: post.id,
                  image_url: post.yoast_head_json.og_image[0].url,
                  content: post.content.rendered,
                });
              break;
            }
          }
        });
        await queryRunner.commitTransaction();
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
      }
      wp.cats = wp.registerRoute('wp/v2', '/aiovg_categories/(?P<id>)');
      const cats = await getAll( wp.cats() );
      try {
        await queryRunner.startTransaction();
        cats.map(async cat => {
          await queryRunner.manager.insert(Category, {
            category_id: cat.id,
            name: cat.name,
            slug: cat.slug,
            description: cat.description,
          });
        });
        await queryRunner.commitTransaction();
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
      }
      wp.videos = wp.registerRoute('wp/v2', '/aiovg_videos/(?P<id>)');
      const videos = await getAll( wp.videos() )
      // console.log(videos)
      try {
        await queryRunner.startTransaction();
        videos.map(async post => {
          if (post.aiovg_categories.length === 1 && post.aiovg_categories[0] === MUSIC_CAT) {
            await queryRunner.manager.insert(Music, {
              title: post.title.rendered,
              link: post.slug,
              video_id: post.id,
              image_url: post.image, //post.yoast_head_json.og_image[0].url,
              description: post.content.rendered,
              duration: post.duration,
              video_urls: post.mp4.map(url => {
                return { location: '', url };
              }),
            });
          } else {
            await queryRunner.manager.insert(Video, {
              title: post.title.rendered,
              link: post.slug,
              video_id: post.id,
              image_url: post.image, //post.yoast_head_json.og_image[0].url,
              description: post.content.rendered,
              duration: post.duration,
              video_urls: post.mp4.map(url => {
                return { location: '', url };
              }),
            });
          }
        });
        await queryRunner.commitTransaction();
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
      }
      
      let data = await readFileSync(__dirname + '/../../../../channels.data.json');
      data = JSON.parse(data.toString());
      await data.forEach(async (channel: {}) => {
        await queryRunner.manager.save(
          queryRunner.manager.create<Channel>(Channel, channel)
        );
      });
      data = await readFileSync(__dirname + '/../../../../websites.data.json');
      data = JSON.parse(data.toString());
      await data.forEach(async (website: {}) => {
        await queryRunner.manager.save(
          queryRunner.manager.create<Website>(Website, website)
        );
      });
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DELETE FROM music`);
      await queryRunner.query(`DELETE FROM videos`);
      await queryRunner.query(`DELETE FROM websites`);
      await queryRunner.query(`DELETE FROM channels`);
      await queryRunner.query(`DELETE FROM categories`);
      await queryRunner.query(`DELETE FROM posts`);
      await queryRunner.query(`DELETE FROM files`);
    }
  }