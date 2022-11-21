import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Post } from './posts';
import posts from '../../posts.data.json';
import videos from '../../videos.data.json';
import {marked} from 'marked';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postUrl = '/assets/posts/';
  
  constructor(private http: HttpClient) { }

  getPost(link: string | null) {
    const post = posts.find((post: { link: string | null; }) => post.link === link);
    const result = {
      ...post,
      text: '' as any
    };
    let text
    if (post) {
      text = this.http
        .get(this.postUrl + link + '.md', { responseType: 'text' })
        .pipe(map(res => {
          res = marked.parse(res)
          const found = res.match(/\[embed_video id=(.*)\]/g)
          found?.map(value => {
            const id = Number(value.replace(/\[embed_video id=(.*)\]/, '$1'))
            const video = videos.find((v: { video_id: any; }) => v.video_id === id);
            const url = video?.video_urls[0].url || value;
            const img = video?.image_url || '';
            const html5video = `
              <video controls preload="none" poster="${img}">
                <source src="${url}" type="video/mp4">
              </video>`
            res = res.replace(value, html5video)
            return video;
          });
          return res;
        }));
      result.text = text;
    }
    return result;
  }
}
