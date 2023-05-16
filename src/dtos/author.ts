import { ArrayNotEmpty, IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Book } from '../entities';
import { IAuthorRequest } from '../interfaces';

export class AuthorDTO {

	@IsString()
	@IsNotEmpty()
	@MaxLength(255)
	name: string;

	@IsOptional()
	@IsBoolean()
	active: boolean;

	@IsOptional()
	@IsArray()
	@ArrayNotEmpty()
	books: Book[];

	constructor(body: IAuthorRequest) {
		this.name = body.name;
		this.active = body.active;
		this.books = body.books;
	}
}