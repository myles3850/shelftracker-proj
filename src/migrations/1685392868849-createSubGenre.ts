import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSubGenre1685392868849 implements MigrationInterface {
    name = 'CreateSubGenre1685392868849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`sub_genre\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_24d0f39e0abd23276bb64fe701\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_24d0f39e0abd23276bb64fe701\` ON \`sub_genre\``);
        await queryRunner.query(`DROP TABLE \`sub_genre\``);
    }

}
