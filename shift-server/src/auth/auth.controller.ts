import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from 'src/common/dto/auth.dto';
import { Public } from 'src/decorators/SetMetaData';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() req: AuthDto) {
    return this.authService.login(req);
  }
}
