import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserToken1757806794464 implements MigrationInterface {
    name = 'CreateUserToken1757806794464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users-token" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_c57095d3438dce1133a2b7150ac" DEFAULT NEWSEQUENTIALID(), "refresh_token" varchar(255) NOT NULL, "expires_at" datetime NOT NULL, "user_id" uniqueidentifier NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_95405540aa6ecffde282e12e6d7" DEFAULT getdate(), CONSTRAINT "PK_c57095d3438dce1133a2b7150ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users-token" ADD CONSTRAINT "FK_802c5aedd51b9a3205737db092a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users-token" DROP CONSTRAINT "FK_802c5aedd51b9a3205737db092a"`);
        await queryRunner.query(`DROP TABLE "users-token"`);
    }

}
