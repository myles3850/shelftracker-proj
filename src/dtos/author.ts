import { ArrayNotEmpty, IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Book } from '../entities';
import { IAuthorRequest } from '../interfaces';

export class AuthorDTO {

	@IsString()
	@IsNotEmpty()
	@MaxLength(255)
	name: string;


	constructor(body: IAuthorRequest) {
		this.name = body.name;
	}

}