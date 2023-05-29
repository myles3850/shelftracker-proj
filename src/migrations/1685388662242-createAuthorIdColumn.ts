import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAuthorIdColumn1685388662242 implements MigrationInterface {
    name = 'CreateAuthorIdColumn1685388662242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`author_id\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`author_id\``);
    }

}
