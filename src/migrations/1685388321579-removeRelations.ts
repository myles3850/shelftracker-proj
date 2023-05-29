import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveRelations1685388321579 implements MigrationInterface {
    name = 'RemoveRelations1685388321579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_66a4f0f47943a0d99c16ecf90b2\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`authorId\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`authorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_66a4f0f47943a0d99c16ecf90b2\` FOREIGN KEY (\`authorId\`) REFERENCES \`author\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}
