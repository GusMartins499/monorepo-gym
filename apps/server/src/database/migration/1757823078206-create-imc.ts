import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateImc1757823078206 implements MigrationInterface {
    name = 'CreateImc1757823078206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "imc" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_b2f38b824da5846f543dcee14cc" DEFAULT NEWSEQUENTIALID(), "height" decimal(5,2) NOT NULL, "weight" decimal(6,2) NOT NULL, "imc" decimal(5,2) NOT NULL, "classification" varchar(255) CONSTRAINT CHK_8d4580a8ccff46823e778c1f0d_ENUM CHECK(classification IN ('UNDERWEIGHT','NORMAL','OVERWEIGHT','OBESE_I','OBESE_II','OBESE_III')) NOT NULL, "id_user_imc" uniqueidentifier NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_17cc79d971756d341b66fadae11" DEFAULT getdate(), CONSTRAINT "CHK_7c98af46140940bcda88d6d47a" CHECK ("classification" IN ('UNDERWEIGHT', 'NORMAL', 'OVERWEIGHT', 'OBESE_I', 'OBESE_II', 'OBESE_III')), CONSTRAINT "PK_b2f38b824da5846f543dcee14cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "imc" ADD CONSTRAINT "FK_17add4169bafd488bb73cbffd0f" FOREIGN KEY ("id_user_imc") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imc" DROP CONSTRAINT "FK_17add4169bafd488bb73cbffd0f"`);
        await queryRunner.query(`DROP TABLE "imc"`);
    }

}
