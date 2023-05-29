import { IsNumberString } from 'class-validator';

export class IdDTO {
	@IsNumberString()
	id:string;

	constructor(id: string){
		this.id = id;
	}

}