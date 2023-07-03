import { IsNotEmpty, IsString } from 'class-validator';
import { ISeriesRequest } from '../interfaces';

export class SeriesDTO {
	@IsString()
	@IsNotEmpty()
	name: string;

	constructor(series: ISeriesRequest){
		this.name = series.name;
	}
}