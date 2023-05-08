import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBook1683414457113 implements MigrationInterface {
    name = 'CreateBook1683414457113';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`book\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`pages\` int NULL, \`type\` enum ('paperback', 'hardback', 'e-book', 'audiobook', 'pdf') NOT NULL DEFAULT 'paperback', \`created\` date NOT NULL DEFAULT (CURRENT_DATE), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`book\``);
    }

}
