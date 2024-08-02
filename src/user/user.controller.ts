import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
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
  async getUserById(@Param('id') id: number): Promise<UserModel> {
    const fieldsToSelect = {
      name: true,
      surname: true,
      projects: true,
    };
    return this.userService.user({ id: id }, fieldsToSelect);
  }
  @Post('register')
  @ApiTags('User')
  async registerUser(@Body() userData: any) {
    return this.userService.createUser(userData);
  }
}
