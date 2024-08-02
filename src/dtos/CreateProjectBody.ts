import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProjectBody {
  @IsNotEmpty()
  @ApiProperty()
  tags: number[];

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  author: string;

  @IsNotEmpty()
  @ApiProperty()
  link: string;

  @ApiProperty()
  description: string;
}
