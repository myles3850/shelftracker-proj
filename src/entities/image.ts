import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {

	@PrimaryGeneratedColumn({
		name: 'id',
		type: 'int',
	})
	id: number;

	@Column({
		name: 'url',
		nullable: false,
		type: 'varchar',
		unique: true,
	})
	url: string;

	@Column({
		type:'date',
		nullable:false,
		default: () => 'curdate()'
	})
	created: string;
}