import { JwtAuthGuard } from '@modules/auth/guard';
import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUserData } from '@shared/decorators';

import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getUsers() {
    return this.usersService.getUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  public async getMe(@GetUserData('sub') id: number) {
    return this.usersService.getUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('health-data')
  public async getUserHealthData() {
    return this.usersService.getUserHealthData();
  }

  @UseGuards(JwtAuthGuard)
  @Post('health-data')
  public async setUserHealthData() {
    return this.usersService.setUserHealthData();
  }

  @UseGuards(JwtAuthGuard)
  @Patch('health-data')
  public async updateUserHealthData() {
    return this.usersService.updateUserHealthData();
  }

  @UseGuards(JwtAuthGuard)
  @Delete('health-data')
  public async deleteUserHealthData() {
    return this.usersService.deleteUserHealthData();
  }

  @UseGuards(JwtAuthGuard)
  @Get('activity-data')
  public async getUserActivityData() {
    return this.usersService.getUserActivityData();
  }

  @UseGuards(JwtAuthGuard)
  @Get('workout-data')
  public async getUserWorkoutData() {
    return this.usersService.getUserWorkoutData();
  }
}
