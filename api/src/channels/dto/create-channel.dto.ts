import { IsString } from 'class-validator';

export class CreateChannelDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly url: string;

  @IsString()
  readonly image: string;

}
