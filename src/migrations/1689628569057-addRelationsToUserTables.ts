import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsToUserTables1689628569057 implements MigrationInterface {
    name = 'AddRelationsToUserTables1689628569057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_f462968b424cfa19b629109b6f\` ON \`credential\` (\`user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_fb2e442d14add3cefbdf33c4561\` FOREIGN KEY (\`role_id\`) REFERENCES \`role\`(\`id\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`credential\` ADD CONSTRAINT \`FK_f462968b424cfa19b629109b6f3\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`credential\` DROP FOREIGN KEY \`FK_f462968b424cfa19b629109b6f3\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_fb2e442d14add3cefbdf33c4561\``);
        await queryRunner.query(`DROP INDEX \`REL_f462968b424cfa19b629109b6f\` ON \`credential\``);
    }

}
