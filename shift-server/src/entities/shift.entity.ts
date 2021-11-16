import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Shift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column({ nullable: true })
  start?: string;
  @Column({ nullable: true })
  end?: string;
}

export { Shift };
