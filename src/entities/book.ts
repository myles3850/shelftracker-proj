import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { EBookTypes } from '../enums';
import { Author } from './author';
import { Image } from './image';
import { Series } from './series';
import { Genre } from './genre';

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

	@Column({
		type: 'int',
		name: 'author_id',
		nullable: true,
	})
	authorId: number | null;

	@Column({
		type: 'varchar',
		name: 'subgenre_ids',
		nullable: true
	})
	subGenreIds: string | null;

	@Column({
		type: 'int',
		name: 'image_id',
		nullable: true,
	})
	imageId: number | null;

	@Column({
		type: 'int',
		name: 'series_id',
		nullable:true,
	})
	seriesId: number | null;

	@Column({
		type: 'int',
		name: 'genre_id',
		nullable: true,
	})
	genreId: number | null;
	
	@ManyToOne(()=> Author, author => author.books, {
		nullable: true,
		onDelete: 'SET NULL' 
	})
	@JoinColumn({
		name: 'author_id',
		referencedColumnName: 'id'
	})
	author: Author | null;

	@OneToOne(()=> Image, image => image.book,{
		nullable: true,
		onDelete: 'SET NULL',
	})
	@JoinColumn({
		name:'image_id',
		referencedColumnName: 'id'
	})
	image: Image | null;

	@ManyToOne(()=> Series, Series => Series.books, {
		nullable: true,
		onDelete: 'SET NULL' 
	})
	@JoinColumn({
		name: 'series_id',
		referencedColumnName: 'id'
	})
	series: Series | null;

	@ManyToOne(()=> Genre, genre => genre.books, {
		nullable: true,
		onDelete: 'SET NULL' 
	})
	@JoinColumn({
		name: 'genre_id',
		referencedColumnName: 'id'
	})
	genre: Genre | null;

}