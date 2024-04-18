import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProjectBody {
  @IsNotEmpty()
  @ApiProperty()
  project_image: File;

  @IsNotEmpty()
  @ApiProperty()
  project_tags: string;

  @IsNotEmpty()
  @ApiProperty()
  project_name: string;

  @IsNotEmpty()
  @ApiProperty()
  project_owner: string;

  @IsNotEmpty()
  @ApiProperty()
  project_link: string;

  @ApiProperty()
  project_description: string;
}
