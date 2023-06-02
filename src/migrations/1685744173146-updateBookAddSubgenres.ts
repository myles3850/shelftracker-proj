import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateBookAddSubgenres1685744173146 implements MigrationInterface {
    name = 'UpdateBookAddSubgenres1685744173146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`subgenre_id\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`subgenre_id\``);
    }

}
