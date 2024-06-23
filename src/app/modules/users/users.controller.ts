import { JwtAuthGuard } from '@modules/auth/guard';
import {
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

import { UserHealthData } from './dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getUsers() {
    return this.usersService.getUsers();
  }

  @HttpCode(200)
  @Get('me')
  public async getMe(@GetUserData('sub') id: number) {
    return this.usersService.getUser(id);
  }

  @Get('health-data')
  public async getUserHealthData(@GetUserData('sub') id: number) {
    return this.usersService.getUserHealthData(id);
  }

  @Post('health-data')
  public async setUserHealthData(
    @GetUserData('sub') id: number,
    dto: UserHealthData,
  ) {
    return this.usersService.setUserHealthData(id, dto);
  }

  @Patch('health-data')
  public async updateUserHealthData() {
    return this.usersService.updateUserHealthData();
  }

  @Delete('health-data')
  public async deleteUserHealthData() {
    return this.usersService.deleteUserHealthData();
  }

  @Get('activity-data')
  public async getUserActivityData() {
    return this.usersService.getUserActivityData();
  }

  @Get('workout-data')
  public async getUserWorkoutData() {
    return this.usersService.getUserWorkoutData();
  }
}
