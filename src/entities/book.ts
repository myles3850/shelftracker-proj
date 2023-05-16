import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { EBookTypes } from '../enums';
import { Author } from './author';

@Entity()
export class Book {

	@PrimaryGeneratedColumn({
		type:'int',
		name: 'id',
	})
	id: number;
	
	@Column({
		type:'varchar',
		name:'title',
		nullable:false,
	})
	title: string;
	
	@Column({
		type: 'int',
		name: 'pages',
		nullable: true,
		default: null,
	})
	pages: number;
	
	@Column({
		type: 'enum',
		enum: EBookTypes,
		name:'type',
		default: EBookTypes.PAPERBACK,
		nullable:false,
	})
	type: EBookTypes;
	
	@Column({
		type:'date',
		nullable:false,
		default: 'curdate()'
	})
	created: string;

	@ManyToOne(()=> Author, (Author) => Author.id, {
		nullable: true,
		onDelete: 'SET NULL',
	})
	author: Author;
}