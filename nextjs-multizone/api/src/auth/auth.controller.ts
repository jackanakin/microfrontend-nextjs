import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Req() req, @Res() res: Response) {
    res.cookie('accessToken', 'qwe123', {
      expires: new Date(new Date().getTime() + 30 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      domain: 'localhost',
    });

    const user = {
      name: 'User',
    };

    return res.send(user);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete()
  remove(@Req() req, @Res() res: Response) {
    const cookies = req.cookies;

    console.log(cookies);

    res.clearCookie('accessToken');

    return res.send(null);
  }
}
