import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';

@Entity()
export class Author {
	@PrimaryGeneratedColumn({
		name: 'id',
		type: 'int'
	})
	id: number;

	@Column({
		name: 'name',
		type: 'varchar',
		nullable: false,
	})
	name: string;
	
	@Column({
		name:'active',
		type: 'tinyint',
		nullable: false,
		default: () => '1',
	})
	active: boolean;

	@OneToMany(() => Book, book => book.author, {
		nullable: false,
	})
	books: Book[];
}