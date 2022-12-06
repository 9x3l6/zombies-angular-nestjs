import { IsString } from 'class-validator';

export class CreateWebsiteDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly url: string;
}
