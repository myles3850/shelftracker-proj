import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGenreTable1688856963470 implements MigrationInterface {
    name = 'CreateGenreTable1688856963470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`genre\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_date\` date NOT NULL DEFAULT (current_date), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`genre\``);
    }

}
