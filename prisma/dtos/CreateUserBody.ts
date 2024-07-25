import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @ApiProperty()
  user_name: string;

  @IsNotEmpty({
    message: 'O sobrenome não pode estar em branco',
  })
  @ApiProperty()
  user_surname: string;

  @IsEmail()
  @IsNotEmpty({
    message: 'O campo e-mail não pode estar em branco',
  })
  @ApiProperty()
  user_email: string;

  @IsNotEmpty()
  @ApiProperty()
  user_password: string;
}
