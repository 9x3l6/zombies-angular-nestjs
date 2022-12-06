import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly date: string;

  @IsString()
  readonly link: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly image_url: string;
}
