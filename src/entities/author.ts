import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';
import { Image } from './image';

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

	@Column({
		type: 'int',
		name: 'image_id',
		nullable: true,
	})
	imageId: number | null;

	@OneToMany(() => Book, book => book.author, {
		nullable: false,
	})
	books: Book[];

	@OneToOne(()=> Image, image => image.author,{
		nullable: true,
		onDelete: 'SET NULL',
	})
	@JoinColumn({
		name:'image_id',
		referencedColumnName: 'id'
	})
	image: Image | null;
}
