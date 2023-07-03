import AppDBSource from '../dbConnection';
import { SeriesDTO } from '../dtos';
import { Series } from '../entities';

export const createSeries = async (seriesDTO: SeriesDTO) => {
	try {
		const series = new Series();
		series.name = seriesDTO.name;
	
		const seriesRepository = AppDBSource.getRepository(Series);
		return await seriesRepository.save(series);
	} catch (error) {
		throw new Error(`something went wrong updating the series record: ${ error.message }`);

	}
};

export const getAllSeries = async (): Promise<Series[]> => {
	try {
		const seriesRepository = AppDBSource.getRepository(Series);
		return await seriesRepository.find({ select: {
			id: true,
			name: true
		} });
	} catch (error) {
		throw new Error(`something went wrong retrieving the series records: ${ error.message }`);
	}
};