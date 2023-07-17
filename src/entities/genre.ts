import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';

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
		nullable: false,
		unique: true,
	})
	name: string;

	@Column({
		name: 'created_date',
		type: 'date',
		nullable: false,
		default: () => 'curdate()',
	})
	created: Date;

	@OneToMany(() => Book, book => book.genre, {
		onDelete: 'SET NULL',
		nullable:true,
	})
	books: Book[] | null;
}