import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateImageTable1686601291761 implements MigrationInterface {
    name = 'CreateImageTable1686601291761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`image\` (\`id\` int NOT NULL AUTO_INCREMENT, \`url\` varchar(255) NOT NULL, \`created\` date NOT NULL DEFAULT (CURRENT_DATE), UNIQUE INDEX \`IDX_602959dc3010ff4b4805ee7f10\` (\`url\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_602959dc3010ff4b4805ee7f10\` ON \`image\``);
        await queryRunner.query(`DROP TABLE \`image\``);
    }

}
