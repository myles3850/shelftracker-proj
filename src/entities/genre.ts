import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

	@Column({
		name: 'book_ids',
		nullable: true,
	})
	bookIds: number | null;

	@OneToMany(() => Book, book => book.genre, {
		onDelete: 'SET NULL',
		nullable:true,
	})
	@JoinColumn({
		referencedColumnName: 'id',
		name: 'book_ids'
	})
	books: Book | null;
}