import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({
    message: 'O nome não pode estar em branco',
  })
  @ApiProperty()
  name: string;

  @IsNotEmpty({
    message: 'O sobrenome não pode estar em branco',
  })
  @ApiProperty()
  surname: string;

  @IsEmail(
    {},
    {
      message: 'O campo e-mail deve ser um endereço de e-mail válido',
    },
  )
  @IsNotEmpty({
    message: 'O campo e-mail não pode estar em branco',
  })
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @MinLength(8, {
    message: 'A senha deve ter no mínimo 8 caracteres',
  })
  @ApiProperty()
  password: string;
}
