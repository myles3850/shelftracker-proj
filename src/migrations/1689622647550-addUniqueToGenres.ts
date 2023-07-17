import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUniqueToGenres1689622647550 implements MigrationInterface {
    name = 'AddUniqueToGenres1689622647550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`genre\` DROP COLUMN \`book_ids\``);
        await queryRunner.query(`ALTER TABLE \`genre\` ADD UNIQUE INDEX \`IDX_dd8cd9e50dd049656e4be1f7e8\` (\`name\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`genre\` DROP INDEX \`IDX_dd8cd9e50dd049656e4be1f7e8\``);
        await queryRunner.query(`ALTER TABLE \`genre\` ADD \`book_ids\` int NULL`);
    }

}
