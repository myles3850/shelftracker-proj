import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGenreRelationToBooks1689193153333 implements MigrationInterface {
    name = 'AddGenreRelationToBooks1689193153333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`genre\` ADD \`book_ids\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`genre_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_f316eed809f6f7617821012ad05\` FOREIGN KEY (\`genre_id\`) REFERENCES \`genre\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_f316eed809f6f7617821012ad05\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`genre_id\``);
        await queryRunner.query(`ALTER TABLE \`genre\` DROP COLUMN \`book_ids\``);
    }

}
