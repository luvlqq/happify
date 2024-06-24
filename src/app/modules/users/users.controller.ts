import { JwtAuthGuard } from '@modules/auth/guard';
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
import { GetUserData } from '@shared/decorators';

import { UpdateUserHealthData, UserHealthData } from './dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(200)
  @Get()
  public async getUsers() {
    return this.usersService.getUsers();
  }

  @HttpCode(200)
  @Get('me')
  public async getMe(@GetUserData('sub') id: number) {
    return this.usersService.getUser(id);
  }

  @HttpCode(200)
  @Get('health-data')
  public async getUserHealthData(@GetUserData('sub') id: number) {
    return this.usersService.getUserHealthData(id);
  }

  @HttpCode(201)
  @Post('health-data')
  public async setUserHealthData(
    @GetUserData('sub') id: number,
    @Body() dto: UserHealthData,
  ) {
    return this.usersService.setUserHealthData(id, dto);
  }

  @HttpCode(200)
  @Patch('health-data')
  public async updateUserHealthData(
    @GetUserData('sub') id: number,
    @Body() dto: UpdateUserHealthData,
  ) {
    return this.usersService.updateUserHealthData(id, dto);
  }

  @HttpCode(200)
  @Delete('health-data')
  public async deleteUserHealthData(@GetUserData('sub') id: number) {
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
