import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAuthorID1685136361161 implements MigrationInterface {
    name = 'UpdateAuthorID1685136361161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_66a4f0f47943a0d99c16ecf90b2\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_66a4f0f47943a0d99c16ecf90b2\` FOREIGN KEY (\`authorId\`) REFERENCES \`author\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_66a4f0f47943a0d99c16ecf90b2\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`author\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_66a4f0f47943a0d99c16ecf90b2\` FOREIGN KEY (\`authorId\`) REFERENCES \`author\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}
