import { CookingLevelEnum, DietTypeEnum, MealTypeEnum } from '@interfaces/enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Meal' })
@Index(['id'], { unique: true })
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'int' })
  calories: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  protein: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  carbohydrates: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  fats: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  fiber: number;

  @Column({ type: 'varchar', enum: MealTypeEnum })
  meal_type: MealTypeEnum;

  @Column({ type: 'varchar', enum: DietTypeEnum })
  diet_type: DietTypeEnum;

  @Column({ type: 'int' })
  preparation_time: number;

  @Column({ type: 'varchar', enum: CookingLevelEnum })
  difficulty_level: CookingLevelEnum;

  @Column({ type: 'varchar', nullable: true })
  image_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
