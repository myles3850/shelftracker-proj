import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRlationsBookAuthor1685389541342 implements MigrationInterface {
    name = 'CreateRlationsBookAuthor1685389541342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_24b753b0490a992a6941451f405\` FOREIGN KEY (\`author_id\`) REFERENCES \`author\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_24b753b0490a992a6941451f405\``);
    }

}
