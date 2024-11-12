import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.findByEmail(createUserDto.email);
      if (user) throw new Error('email already exits');
      console.log(`createUserDto : ${JSON.stringify(createUserDto)}`);
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    } catch (error) {
      console.log('user creation failed. Error:', error.message);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.userModel.find();
    } catch (error) {
      console.log('users findAll failed. Error:', error.message);
      throw error;
    }
  }

  async findByEmail(email) {
    try {
      return await this.userModel.findOne({ email });
    } catch (error) {
      console.log('findByEmail method failed. Error:', error.message);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      return await this.userModel.findById(id);
      // console.log("res--", Object.keys(res));
    } catch (error) {
      console.log('users findOne failed. Error:', error.message);
      throw error;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    try {
      const res = await this.userModel.findById(id);
      if (!res) throw new Error('user not found');
      await this.userModel.deleteOne({ _id: id });
      return res;
    } catch (error) {
      console.log('users deletion failed. Error:', error.message);
      throw error;
    }
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.findByEmail(email);
    // if (user && (await bcrypt.compare(pass, user.password))) {
    if (user && pass === user.password) {
      const obj = user.toObject();
      const { password, ...result } = user.toObject();
      return result;
    }
    return null;
  }
}
