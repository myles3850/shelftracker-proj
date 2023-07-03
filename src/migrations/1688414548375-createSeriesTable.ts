import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSeriesTable1688414548375 implements MigrationInterface {
    name = 'CreateSeriesTable1688414548375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b7de3ba9fa898fea1ebac5279e\` ON \`book\``);
        await queryRunner.query(`DROP INDEX \`IDX_5a725e1f649de5ec3d9e87ae07\` ON \`author\``);
        await queryRunner.query(`CREATE TABLE \`series\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`book_ids\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`series\` ADD CONSTRAINT \`FK_9d484a56c8dde0b24c46d746a08\` FOREIGN KEY (\`book_ids\`) REFERENCES \`book\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`series\` DROP FOREIGN KEY \`FK_9d484a56c8dde0b24c46d746a08\``);
        await queryRunner.query(`DROP TABLE \`series\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_5a725e1f649de5ec3d9e87ae07\` ON \`author\` (\`image_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_b7de3ba9fa898fea1ebac5279e\` ON \`book\` (\`image_id\`)`);
    }

}
