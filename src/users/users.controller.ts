import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const result = await this.usersService.create(createUserDto);
      return res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'user added successfully',
        data: result,
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_ACCEPTABLE).json({
        success: false,
        message: error.message,
      });
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const result = await this.usersService.findAll();
      return res.status(HttpStatus.OK).json({
        success: true,
        data: result,
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: error.message,
      });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const result = await this.usersService.findOne(id);
      return res.status(HttpStatus.OK).json({
        success: true,
        data: result,
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: error.message,
      });
    }
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const result = await this.usersService.remove(id);
      return res.status(HttpStatus.OK).json({
        success: true,
        message: 'user deleted successfully',
        data: result,
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_ACCEPTABLE).json({
        success: false,
        message: error.message,
      });
    }
  }
}
