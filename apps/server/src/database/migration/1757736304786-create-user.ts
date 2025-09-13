import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1757736304786 implements MigrationInterface {
    name = 'CreateUser1757736304786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_a3ffb1c0c8416b9fc6f907b7433" DEFAULT NEWSEQUENTIALID(), "name" varchar(60) NOT NULL, "username" varchar(60) NOT NULL, "password" varchar(255) NOT NULL, "role" varchar(255) CONSTRAINT CHK_0ee1cdc7c431d69af911d39906_ENUM CHECK(role IN ('ADMIN','STUDENT','PROFESSOR')) NOT NULL CONSTRAINT "DF_ace513fa30d485cfd25c11a9e4a" DEFAULT 'STUDENT', "status" varchar(255) CONSTRAINT CHK_59e578902eb4c56402d2d47730_ENUM CHECK(status IN ('ACTIVE','INACTIVE')) NOT NULL CONSTRAINT "DF_3676155292d72c67cd4e090514f" DEFAULT 'ACTIVE', "created_at" datetime2 NOT NULL CONSTRAINT "DF_c9b5b525a96ddc2c5647d7f7fa5" DEFAULT getdate(), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "CHK_6835094c169147af24637f19eb" CHECK ("role" IN ('ADMIN', 'STUDENT', 'PROFESSOR')), CONSTRAINT "CHK_b2522f6104f9298f9d50f99a6c" CHECK ("status" IN ('ACTIVE', 'INACTIVE')), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
