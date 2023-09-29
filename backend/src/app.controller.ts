import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginRequest } from './models/LoginRequest';
import { Page } from './models/Page';
import { content } from './content';

const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhbmRpZGF0ZUBmbGFnc29mdC5ydSJ9.4hJiMisppLwGZ5eAXVPZDmlkLnSJXZFddZ4SauHXA8E';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/login')
  login(@Body() body: LoginRequest) {
    if (body.login === 'admin' && body.password === 'admin') {
      return {
        token: AUTH_TOKEN,
      };
    }
    throw new HttpException('Invalid login or password', 401);
  }

  @Get('/pages/page1')
  getPage(@Req() request: Request) {
    const authorizationHeader = request.headers['authorization'];
    if (authorizationHeader !== `Bearer ${AUTH_TOKEN}`) {
      throw new HttpException('Invalid token', 401);
    }
    return new Page(content.page1.title, content.page1.content);
  }

  @Get('/pages/page2')
  getPage2(@Req() request: Request) {
    const authorizationHeader = request.headers['authorization'];
    if (authorizationHeader !== `Bearer ${AUTH_TOKEN}`) {
      throw new HttpException('Invalid token', 401);
    }
    return new Page(content.page2.title, content.page2.content);
  }

  @Get('/pages/page3')
  getPage3(@Req() request: Request) {
    const authorizationHeader = request.headers['authorization'];
    if (authorizationHeader !== `Bearer ${AUTH_TOKEN}`) {
      throw new HttpException('Invalid token', 401);
    }
    return new Page(content.page3.title, content.page3.content);
  }
}
