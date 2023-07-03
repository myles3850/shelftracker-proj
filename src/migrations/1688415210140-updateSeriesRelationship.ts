import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateSeriesRelationship1688415210140 implements MigrationInterface {
    name = 'UpdateSeriesRelationship1688415210140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`series\` DROP FOREIGN KEY \`FK_9d484a56c8dde0b24c46d746a08\``);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`series_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_c6c5a77e8b605c605fadbcaec39\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_c6c5a77e8b605c605fadbcaec39\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`series_id\``);
        await queryRunner.query(`ALTER TABLE \`series\` ADD CONSTRAINT \`FK_9d484a56c8dde0b24c46d746a08\` FOREIGN KEY (\`book_ids\`) REFERENCES \`book\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}
