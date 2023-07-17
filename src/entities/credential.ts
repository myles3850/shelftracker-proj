import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

@Entity()
export class Credential {
	@PrimaryGeneratedColumn({
		name: 'id',
		type: 'int'
	})
	id: number;

	@Column({
		name: 'user_id',
		type: 'int',
		nullable: false,
		unique: true,
	})
	userId: number;

	@Column({
		name: 'salt',
		type: 'varchar',
		nullable: false,
	})
	salt: string;

	@Column({
		name: 'hash',
		type: 'varchar',
		nullable: false,
		unique: true,
	})
	hash: string;

	@OneToOne(()=> User, user => user.credentials,{
		nullable: false,
		onDelete: 'RESTRICT',
	})
	@JoinColumn({
		name:'user_id',
		referencedColumnName: 'id'
	})
	user: User;

	
}