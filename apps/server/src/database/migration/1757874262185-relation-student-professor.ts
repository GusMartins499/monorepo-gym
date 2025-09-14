import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationStudentProfessor1757874262185 implements MigrationInterface {
    name = 'RelationStudentProfessor1757874262185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "professor_id" uniqueidentifier`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_acec766bc8dd08a6a6c88c61067" FOREIGN KEY ("professor_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_acec766bc8dd08a6a6c88c61067"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "professor_id"`);
    }

}
