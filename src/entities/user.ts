import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role';
import { Credential } from './credential';

@Entity()
export class User {
	@PrimaryGeneratedColumn({
		name: 'id',
		type: 'int'
	})
	id: number;
	
	@Column({
		name: 'role_id',
		type: 'int'
	})
	roleId: number;


	@Column({
		name: 'first_name',
		type: 'varchar',
		nullable: false,
	})
	firstName: string;

	@Column({
		name: 'last_name',
		type: 'varchar',
		nullable: false,
	})
	lastName: string;

	@Column({
		name: 'email',
		type: 'varchar',
		nullable: false,
		unique: true,
	})
	email: string;

	
	@Column({
		name: 'phone_number',
		type: 'varchar',
		length: 50,
		nullable: false,
	})
	phoneNumber: string;
	
	@Column({
		name: 'address_line_1',
		type: 'varchar',
		nullable: false,
	})
	addressLine1: string;

	@Column({
		name: 'address_line_2',
		type: 'varchar',
		nullable: true,
	})
	addressLine2: string | null;
	
	@Column({
		name: 'city',
		type: 'varchar',
		nullable: false,
	})
	city: string;
	
	@Column({
		name: 'postcode',
		type: 'varchar',
		nullable: false,
	})
	postcode: string;
	
	@Column({
		name: 'date_of_birth',
		type: 'date',
		nullable: false,
	})
	dateOfBirth: Date;

	@Column({
		name: 'created',
		type: 'date',
		nullable: false,
		default: () => 'curdate()',
	})
	created: Date;

	@ManyToOne(()=> Role, role => role.users, {
		nullable: false,
		onDelete: 'RESTRICT' 
	})
	@JoinColumn({
		name: 'role_id',
		referencedColumnName: 'id'
	})
	role: Role;

	@OneToOne(()=> Credential, credential => credential.user,{
		nullable: true,
		onDelete: 'RESTRICT',
	})
	credentials: Credential | null;

	
}