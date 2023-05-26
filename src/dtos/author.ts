import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
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