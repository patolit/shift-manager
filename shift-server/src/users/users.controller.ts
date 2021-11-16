import { Controller, Get, Request } from '@nestjs/common';
import { Public } from 'src/decorators/SetMetaData';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @Public()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
