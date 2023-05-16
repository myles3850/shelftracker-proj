import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAuthor1684157220170 implements MigrationInterface {
    name = 'CreateAuthor1684157220170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`author\` (\`id\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`author\``);
    }

}
