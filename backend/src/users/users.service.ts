/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import {User} from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  private readonly _users = [
    {
      _id: "6209c0d87166c25a276912d6",
      name: "Honey",
      userName: "Honey",
      userEmail: "honey@test.com",
      password: "$2a$10$CH47MjY.lB4cOBn4Wua0auc2mj0bht/9lW8rl79.zmqHsYPP2AL.m",
      userRole: "user",
      age: 11,
      gender: "Female",
      phone: 1234567890,
      __v: 0
    },
    {
      _id: "6217041263bcba9cb1bc00fb",
      name: "testAddUser",
      userName: "testAddUser",
      userEmail: "testadduser@gmail.com",
      password: "$2a$10$aXJBdcJsZYUeN0MU.B9ENOj2MWSgrDRSwVum/McvVJMnqTD0noDbS",
      userRole: "user",
      age: 12,
      gender: "female",
      phone: 1234567890,
      __v: 0
    }
  ];

  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    
  }

  async createNewUser(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return await this.userModel.create(createUserDto);
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this._users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
