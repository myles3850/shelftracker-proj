import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genre {

	@PrimaryGeneratedColumn({
		name: 'id',
		type: 'int'
	})
	id: number;

	@Column({
		name: 'name',
		type: 'varchar',
		nullable: false
	})
	name: string;

	@Column({
		name: 'created_date',
		type: 'date',
		nullable: false,
		default: () => 'curdate()',
	})
	created: Date;
}