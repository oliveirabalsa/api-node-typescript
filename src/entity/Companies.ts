import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()

export class Companies {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ length: 2})
  state: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;

  @Column()
  document: string;

  @Column({default: false})
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}