import { UserHealth } from '@domain/user/user/entities/user-health.entity';
import { RoleEnum } from '@interfaces/enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'User' })
@Index(['email', 'id'], { unique: true })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: false })
  isPremium: boolean;

  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.USER,
  })
  role: RoleEnum;

  @Column({ nullable: true })
  hashRt?: string;

  @Column({ nullable: true })
  resetCode?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => UserHealth, (healthData) => healthData.user, {
    nullable: true,
  })
  @JoinColumn()
  healthData?: UserHealth;
}
