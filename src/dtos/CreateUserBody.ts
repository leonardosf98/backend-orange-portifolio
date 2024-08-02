import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty({
    message: 'O sobrenome não pode estar em branco',
  })
  @ApiProperty()
  surname: string;

  @IsEmail()
  @IsNotEmpty({
    message: 'O campo e-mail não pode estar em branco',
  })
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
