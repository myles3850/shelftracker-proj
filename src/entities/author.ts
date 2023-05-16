import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Book } from '.';

@Entity()
export class Author {
	@PrimaryColumn({
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

	@OneToMany(() => Book, book => book.author)
	books: Book[];
}