import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { EBookTypes } from '../enums';

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
		default: ()=>'(CURRENT_DATE)'
	})
	created: string;
}