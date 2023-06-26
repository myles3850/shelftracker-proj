import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from './author';
import { Book } from './book';

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

	@OneToOne(() => Book, book => book.image, {
		nullable: true,
		onDelete: 'CASCADE',
	})
	book: Book | null;

	@OneToOne(() => Author, author => author.image, {
		nullable: true,
		onDelete: 'CASCADE',
	})
	author: Author | null;

}