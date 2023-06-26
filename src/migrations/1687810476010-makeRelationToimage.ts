import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeRelationToimage1687810476010 implements MigrationInterface {
    name = 'MakeRelationToimage1687810476010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`image_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD UNIQUE INDEX \`IDX_b7de3ba9fa898fea1ebac5279e\` (\`image_id\`)`);
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`image_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`author\` ADD UNIQUE INDEX \`IDX_5a725e1f649de5ec3d9e87ae07\` (\`image_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_b7de3ba9fa898fea1ebac5279e\` ON \`book\` (\`image_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_5a725e1f649de5ec3d9e87ae07\` ON \`author\` (\`image_id\`)`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_b7de3ba9fa898fea1ebac5279e4\` FOREIGN KEY (\`image_id\`) REFERENCES \`image\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`author\` ADD CONSTRAINT \`FK_5a725e1f649de5ec3d9e87ae07f\` FOREIGN KEY (\`image_id\`) REFERENCES \`image\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`author\` DROP FOREIGN KEY \`FK_5a725e1f649de5ec3d9e87ae07f\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_b7de3ba9fa898fea1ebac5279e4\``);
        await queryRunner.query(`DROP INDEX \`REL_5a725e1f649de5ec3d9e87ae07\` ON \`author\``);
        await queryRunner.query(`DROP INDEX \`REL_b7de3ba9fa898fea1ebac5279e\` ON \`book\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP INDEX \`IDX_5a725e1f649de5ec3d9e87ae07\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`image_id\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP INDEX \`IDX_b7de3ba9fa898fea1ebac5279e\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`image_id\``);
    }

}
