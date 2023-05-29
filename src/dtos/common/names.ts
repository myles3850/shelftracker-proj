import { ArrayNotEmpty, ArrayUnique, IsArray, IsString } from 'class-validator';
import { ISubGenreRequest } from '../../interfaces';

export class NamesDTO {
	@IsArray()
	@ArrayNotEmpty()
	@ArrayUnique()
	@IsString({ each: true })
	names: string[];

	constructor(body: ISubGenreRequest) {
		this.names = body.names;
	}
}