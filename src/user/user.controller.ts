import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
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
      user_name: true,
      user_surname: true,
      user_projects: true,
    };
    return this.userService.user({ user_id: id }, fieldsToSelect);
  }
  @Post('register')
  @ApiTags('User')
  @ApiBody({ type: CreateUserBody })
  async registerUser(@Body() userData: CreateUserBody) {
    return this.userService.createUser(userData);
  }
}
