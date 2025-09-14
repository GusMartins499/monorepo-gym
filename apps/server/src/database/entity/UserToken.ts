import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('users-token')
export class UserToken {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, name: 'refresh_token' })
  refreshToken: string

  @Column({ name: 'expires_at', nullable: false, type: 'datetime' })
  expiresAt: Date

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string

  @ManyToOne(() => User, { onUpdate: "CASCADE", onDelete: "NO ACTION" })
  @JoinColumn({ name: 'user_id' })
  user: User

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}