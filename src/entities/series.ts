import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';

@Entity()
export class Series {

	@PrimaryGeneratedColumn({
		name: 'id',
		type: 'int'
	})
	id: number;

	@Column({
		name: 'title',
		type: 'varchar',
		nullable: false,
	})
	name: string;

	@Column({
		name: 'book_ids',
		nullable: true,
	})
	bookIds: number | null;

	@OneToMany(() => Book, book => book.series, {
		onDelete: 'SET NULL',
		nullable:true,
	})
	@JoinColumn({
		referencedColumnName: 'id',
		name: 'book_ids'
	})
	books: Book | null;
}