import { User } from '@domain/user/user/entities/user.entity';
import { GenderEnum } from '@interfaces/enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'UserHealth' })
export class UserHealth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateOfBirth: string;

  @Column()
  age: number;

  @Column('float')
  BMI: number;

  @Column({
    type: 'enum',
    enum: GenderEnum,
  })
  gender: GenderEnum;

  @Column('float')
  weight: number;

  @Column('float')
  height: number;

  @OneToOne(() => User, (user) => user.healthData)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ unique: true })
  userId: number;
}
