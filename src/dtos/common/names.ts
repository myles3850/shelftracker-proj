import { ArrayNotEmpty, ArrayUnique, IsArray, IsString } from 'class-validator';
import { INamesRequest } from '../../interfaces';

export class NamesDTO {
	@IsArray()
	@ArrayNotEmpty()
	@ArrayUnique()
	@IsString({ each: true })
	names: string[];

	constructor(body: INamesRequest) {
		this.names = body.names;
	}
}