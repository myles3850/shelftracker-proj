import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';

@Entity({ name: 'sub_genre' })
export class SubGenre {
	@PrimaryGeneratedColumn({
		name: 'id',
		type: 'int',
	})
	id: number;

	@Column({
		name: 'name',
		nullable: false,
		type: 'varchar',
		unique: true,
	})
	name: string;

}