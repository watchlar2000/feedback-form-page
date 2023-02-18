import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  message: string;
}
