import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyBookColumName1685744310397 implements MigrationInterface {
    name = 'ModifyBookColumName1685744310397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` CHANGE \`subgenre_id\` \`subgenre_ids\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`subgenre_ids\``);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`subgenre_ids\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`subgenre_ids\``);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`subgenre_ids\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` CHANGE \`subgenre_ids\` \`subgenre_id\` varchar(255) NULL`);
    }

}
