import { IsString } from 'class-validator';

export class CreateMusicDto {
  @IsString()
  readonly link: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly video_id: string;

  @IsString()
  readonly image_url: string;

  @IsString({ each: true })
  readonly video_urls: Array<{ location: string, url: string }>;

  @IsString()
  readonly duration: string;

  @IsString({ each: true })
  readonly categories: string[];
}
