import { UserService } from '@domain/user/user/services/user.service';
import { UpdateUserHealthData } from '@interfaces/dto/user.health.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User, UserHealthData } from '@prisma/client';
import { GetUserData } from 'src/application/decorators';
import { JwtAuthGuard } from 'src/application/guard';

import {
  GetUserDataSwagger,
  SetterUserHealthDataSwagger,
} from '../swagger/users.swagger';

@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @HttpCode(200)
  @SetterUserHealthDataSwagger('Get')
  @Get()
  public async getUsers(): Promise<
    Pick<User, 'id' | 'firstName' | 'lastName'>[] | null
  > {
    return this.usersService.getUsers();
  }

  @HttpCode(200)
  @GetUserDataSwagger()
  @Get('me')
  public async getMe(
    @GetUserData('sub') id: number,
  ): Promise<User | UserHealthData | null> {
    return this.usersService.getUser(id);
  }

  @HttpCode(200)
  @SetterUserHealthDataSwagger('Get')
  @Get('health-data')
  public async getUserHealthData(
    @GetUserData('sub') id: number,
  ): Promise<User | UserHealthData | null> {
    return this.usersService.getUserHealthData(id);
  }

  @HttpCode(201)
  @SetterUserHealthDataSwagger('Set', 201)
  @Post('health-data')
  public async setUserHealthData(
    @GetUserData('sub') id: number,
    @Body() dto: UserHealthData,
  ): Promise<UserHealthData> {
    return this.usersService.setUserHealthData(id, dto);
  }

  @HttpCode(200)
  @SetterUserHealthDataSwagger('Update')
  @Patch('health-data')
  public async updateUserHealthData(
    @GetUserData('sub') id: number,
    @Body() dto: UpdateUserHealthData,
  ): Promise<UserHealthData> {
    return this.usersService.updateUserHealthData(id, dto);
  }

  @HttpCode(200)
  @SetterUserHealthDataSwagger('Delete')
  @Delete('health-data')
  public async deleteUserHealthData(
    @GetUserData('sub') id: number,
  ): Promise<UserHealthData> {
    return this.usersService.deleteUserHealthData(id);
  }

  @HttpCode(200)
  @Get('activity-data')
  public async getUserActivityData() {
    return this.usersService.getUserActivityData();
  }

  @HttpCode(200)
  @Get('workout-data')
  public async getUserWorkoutData() {
    return this.usersService.getUserWorkoutData();
  }
}
