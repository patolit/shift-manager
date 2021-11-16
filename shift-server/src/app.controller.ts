import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Public } from './decorators/SetMetaData';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
