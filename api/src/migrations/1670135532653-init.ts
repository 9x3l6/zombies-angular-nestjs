import { MigrationInterface, QueryRunner } from "typeorm";

export class init1670135532653 implements MigrationInterface {
    name = 'init1670135532653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`CREATE TABLE "channels" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "url" character varying NOT NULL, "image" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_bc603823f3f741359c2339389f9" PRIMARY KEY ("id"))`);
        // await queryRunner.query(`CREATE INDEX "IDX_d01dd8a8e614e01b6ee2466466" ON "channels" ("name") `);
        // await queryRunner.query(`CREATE TABLE "posts" ("id" BIGSERIAL NOT NULL, "date" character varying, "link" character varying, "post_id" character varying, "title" character varying NOT NULL, "content" character varying, "image_url" character varying, "user_id" uuid, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        // await queryRunner.query(`CREATE INDEX "IDX_ecce54d295e861324881b34d57" ON "posts" ("title", "post_id") `);
        // await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying(128) NOT NULL, "password" character varying(128) NOT NULL, "isAdmin" boolean, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        // await queryRunner.query(`CREATE TABLE "videos" ("id" BIGSERIAL NOT NULL, "link" character varying NOT NULL, "title" character varying NOT NULL, "video_id" character varying NOT NULL, "image_url" character varying NOT NULL, "video_urls" json array, "duration" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_e4c86c0cf95aff16e9fb8220f6b" PRIMARY KEY ("id"))`);
        // await queryRunner.query(`CREATE INDEX "IDX_83a5573d8902e9d04284ef1416" ON "videos" ("title", "video_id") `);
        // await queryRunner.query(`CREATE TABLE "categories" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "image_url" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        // await queryRunner.query(`CREATE TABLE "files" ("id" SERIAL NOT NULL, "s3_key" jsonb, "bucket" jsonb, "mime" jsonb, "comment" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY ("id"))`);
        // await queryRunner.query(`CREATE TABLE "websites" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "url" character varying NOT NULL, "isVisible" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_da80e50ae0d986d43c9eb80ab70" PRIMARY KEY ("id"))`);
        // await queryRunner.query(`CREATE INDEX "IDX_a34249682ea550940f77969fd7" ON "websites" ("url") `);
        // await queryRunner.query(`CREATE TABLE "posts_categories_categories" ("postsId" bigint NOT NULL, "categoriesId" bigint NOT NULL, CONSTRAINT "PK_dcb828476cfb3dac4d2eb823faf" PRIMARY KEY ("postsId", "categoriesId"))`);
        // await queryRunner.query(`CREATE INDEX "IDX_f50a96e3d32263cc97588d91d6" ON "posts_categories_categories" ("postsId") `);
        // await queryRunner.query(`CREATE INDEX "IDX_bb4ea8658b6d38df2a5f93cd50" ON "posts_categories_categories" ("categoriesId") `);
        // await queryRunner.query(`CREATE TABLE "videos_categories_categories" ("videosId" bigint NOT NULL, "categoriesId" bigint NOT NULL, CONSTRAINT "PK_34a709d700b77598c522e32aefe" PRIMARY KEY ("videosId", "categoriesId"))`);
        // await queryRunner.query(`CREATE INDEX "IDX_343947bf411ac15825f08db27a" ON "videos_categories_categories" ("videosId") `);
        // await queryRunner.query(`CREATE INDEX "IDX_6880431aaee046f9ae4a79c675" ON "videos_categories_categories" ("categoriesId") `);
        // await queryRunner.query(`ALTER TABLE "channels" ADD CONSTRAINT "FK_23dc7937150c9567d37869313ce" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        // await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_c4f9a7bd77b489e711277ee5986" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        // await queryRunner.query(`ALTER TABLE "videos" ADD CONSTRAINT "FK_900733992fb36a6d855308c0039" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        // await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_2296b7fe012d95646fa41921c8b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        // await queryRunner.query(`ALTER TABLE "posts_categories_categories" ADD CONSTRAINT "FK_f50a96e3d32263cc97588d91d6e" FOREIGN KEY ("postsId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        // await queryRunner.query(`ALTER TABLE "posts_categories_categories" ADD CONSTRAINT "FK_bb4ea8658b6d38df2a5f93cd506" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        // await queryRunner.query(`ALTER TABLE "videos_categories_categories" ADD CONSTRAINT "FK_343947bf411ac15825f08db27ab" FOREIGN KEY ("videosId") REFERENCES "videos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        // await queryRunner.query(`ALTER TABLE "videos_categories_categories" ADD CONSTRAINT "FK_6880431aaee046f9ae4a79c6754" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`ALTER TABLE "videos_categories_categories" DROP CONSTRAINT "FK_6880431aaee046f9ae4a79c6754"`);
        // await queryRunner.query(`ALTER TABLE "videos_categories_categories" DROP CONSTRAINT "FK_343947bf411ac15825f08db27ab"`);
        // await queryRunner.query(`ALTER TABLE "posts_categories_categories" DROP CONSTRAINT "FK_bb4ea8658b6d38df2a5f93cd506"`);
        // await queryRunner.query(`ALTER TABLE "posts_categories_categories" DROP CONSTRAINT "FK_f50a96e3d32263cc97588d91d6e"`);
        // await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_2296b7fe012d95646fa41921c8b"`);
        // await queryRunner.query(`ALTER TABLE "videos" DROP CONSTRAINT "FK_900733992fb36a6d855308c0039"`);
        // await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_c4f9a7bd77b489e711277ee5986"`);
        // await queryRunner.query(`ALTER TABLE "channels" DROP CONSTRAINT "FK_23dc7937150c9567d37869313ce"`);
        // await queryRunner.query(`DROP INDEX "public"."IDX_6880431aaee046f9ae4a79c675"`);
        // await queryRunner.query(`DROP INDEX "public"."IDX_343947bf411ac15825f08db27a"`);
        // await queryRunner.query(`DROP TABLE "videos_categories_categories"`);
        // await queryRunner.query(`DROP INDEX "public"."IDX_bb4ea8658b6d38df2a5f93cd50"`);
        // await queryRunner.query(`DROP INDEX "public"."IDX_f50a96e3d32263cc97588d91d6"`);
        // await queryRunner.query(`DROP TABLE "posts_categories_categories"`);
        // await queryRunner.query(`DROP INDEX "public"."IDX_a34249682ea550940f77969fd7"`);
        // await queryRunner.query(`DROP TABLE "websites"`);
        // await queryRunner.query(`DROP TABLE "files"`);
        // await queryRunner.query(`DROP TABLE "categories"`);
        // await queryRunner.query(`DROP INDEX "public"."IDX_83a5573d8902e9d04284ef1416"`);
        // await queryRunner.query(`DROP TABLE "videos"`);
        // await queryRunner.query(`DROP TABLE "users"`);
        // await queryRunner.query(`DROP INDEX "public"."IDX_ecce54d295e861324881b34d57"`);
        // await queryRunner.query(`DROP TABLE "posts"`);
        // await queryRunner.query(`DROP INDEX "public"."IDX_d01dd8a8e614e01b6ee2466466"`);
        // await queryRunner.query(`DROP TABLE "channels"`);
    }

}
