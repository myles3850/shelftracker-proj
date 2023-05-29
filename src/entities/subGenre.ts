import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sub_genre' })
export class subGenre {
	@PrimaryGeneratedColumn({
		name: 'id',
		type: 'int',
	})
	id: number;

	@Column({
		name: 'name',
		nullable: false,
		type: 'varchar',
		unique: true,
	})
	name: string;
}