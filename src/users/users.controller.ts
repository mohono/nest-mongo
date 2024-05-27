import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}
