import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: any): string {
    const cookies = req.cookies;

    console.log(cookies);

    return `Hello user with cookie ${cookies.accessToken}`;
  }
}
