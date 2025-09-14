import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Check,
  OneToMany,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { USER_ROLE } from '../../utils/constants';
import { IMC } from './IMC';

export enum USER_STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 60, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 60, unique: true, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({
    type: 'varchar',
    enum: USER_ROLE,
    nullable: false,
    default: USER_ROLE.STUDENT
  })
  @Check(`"role" IN ('ADMIN', 'STUDENT', 'PROFESSOR')`)
  role: USER_ROLE;

  @Column({
    type: 'varchar',
    enum: USER_STATUS,
    nullable: false,
    default: USER_STATUS.ACTIVE
  })
  @Check(`"status" IN ('ACTIVE', 'INACTIVE')`)
  status: USER_STATUS;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.students, { nullable: true })
  @JoinColumn({ name: 'professor_id' })
  professor?: User;

  @OneToMany(() => User, (user) => user.professor)
  students?: User[];

  @OneToMany(() => IMC, (imc) => imc.user)
  imc: IMC[];
}
