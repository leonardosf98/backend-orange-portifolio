import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { CreateUserBody } from 'src/dtos/CreateUserBody';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiTags('User')
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'ID do Usuário',
  })
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    const fieldsToSelect = {
      name: true,
      surname: true,
      projects: true,
    };
    return this.userService.user({ id: Number(id) }, fieldsToSelect);
  }
  @Post('register')
  @ApiTags('User')
  async registerUser(@Body() data: CreateUserBody) {
    return this.userService.createUser(data);
  }
}
