import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateUserTables1689627302388 implements MigrationInterface {
    name = 'GenerateUserTables1689627302388'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`credential\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`salt\` varchar(255) NOT NULL, \`hash\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_f462968b424cfa19b629109b6f\` (\`user_id\`), UNIQUE INDEX \`IDX_32ea339ef30d340caac7961bd4\` (\`hash\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_ae4578dcaed5adff96595e6166\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`role_id\` int NOT NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone_number\` varchar(50) NOT NULL, \`address_line_1\` varchar(255) NOT NULL, \`address_line_2\` varchar(255) NULL, \`city\` varchar(255) NOT NULL, \`postcode\` varchar(255) NOT NULL, \`date_of_birth\` date NOT NULL, \`created\` date NOT NULL DEFAULT (current_date), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_ae4578dcaed5adff96595e6166\` ON \`role\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP INDEX \`IDX_32ea339ef30d340caac7961bd4\` ON \`credential\``);
        await queryRunner.query(`DROP INDEX \`IDX_f462968b424cfa19b629109b6f\` ON \`credential\``);
        await queryRunner.query(`DROP TABLE \`credential\``);
    }

}
