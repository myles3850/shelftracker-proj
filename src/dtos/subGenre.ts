import { ISubGenreRequest } from '../interfaces';
import { NamesDTO } from './common';

export class SubGenreDTO extends NamesDTO {
	constructor(body: ISubGenreRequest){
		super(body);
	}
}