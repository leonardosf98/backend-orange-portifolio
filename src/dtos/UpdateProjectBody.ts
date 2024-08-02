import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateProjectBody {
  @IsNotEmpty()
  @ApiProperty()
  tags: number[];

  @IsNotEmpty()
  @ApiProperty()
  projectToEdit: string;

  @IsNotEmpty({
    message: 'O nome não pode estar em branco',
  })
  @ApiProperty()
  name: string;

  //   @IsNotEmpty()
  //   @ApiProperty()
  //   date: Date;

  @IsNotEmpty()
  @ApiProperty()
  link: string;

  @ApiProperty()
  description: string;
}
