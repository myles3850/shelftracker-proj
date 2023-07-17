import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

@Entity()
export class Role {

	@PrimaryGeneratedColumn({
		name: 'id',
		type: 'int'
	})
	id: number;

	@Column({
		name: 'name',
		type: 'varchar',
		nullable: false,
		unique: true,
	})
	name: string;


	@OneToMany(() => User, user => user.role, {
		onDelete: 'SET NULL',
		nullable:true,
	})
	users: User[] | null;
}