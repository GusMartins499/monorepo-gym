import { Check, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IMC_CLASSFICATION } from "../../utils/constants";
import { User } from "./User";

@Entity('imc')
export class IMC {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: false,
  })
  height: number;

  @Column({
    type: 'decimal',
    precision: 6,
    scale: 2,
    nullable: false,
  })
  weight: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: false,
  })
  imc: number;

  @Column({
    type: 'varchar',
    enum: IMC_CLASSFICATION,
    nullable: false,
  })
  @Check(`"classification" IN ('UNDERWEIGHT', 'NORMAL', 'OVERWEIGHT', 'OBESE_I', 'OBESE_II', 'OBESE_III')`)
  classification: IMC_CLASSFICATION;

  @ManyToOne(() => User, (user) => user.imc, {
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION',
    nullable: false,
  })
  @JoinColumn({ name: 'id_user_imc' })
  user: User;

  @Column({ name: 'id_user_imc', type: 'uuid', nullable: false })
  idUserIMC: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}