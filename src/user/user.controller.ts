import { Controller, Get, Param } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    const fieldsToSelect = {
      user_name: true,
      user_surname: true,
      projects: true,
    };
    return this.userService.user({ user_id: Number(id) }, fieldsToSelect);
  }
}
