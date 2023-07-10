import { IGenreRequest } from '../interfaces';
import { NamesDTO } from './common';

export class GenreDTO extends NamesDTO {

	constructor(body: IGenreRequest) {
		super(body);
	}
	
}
