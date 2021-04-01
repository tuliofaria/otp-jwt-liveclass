import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Otp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expiresAt: Date;

  @Column()
  userId: string;

  @Column()
  otp: string;

  @Column()
  used: boolean;
}
