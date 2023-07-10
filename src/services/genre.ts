import AppDBSource from '../dbConnection';
import { GenreDTO } from '../dtos';
import { Genre } from '../entities';

export const saveGenres = async (dto: GenreDTO): Promise<void> => {
	const { names } = dto;

	const saveData = names.map(name => {
		const genreEntity = new Genre();
		genreEntity.name = name;

		return genreEntity;
	});

	await AppDBSource.getRepository(Genre)
		.createQueryBuilder()
		.insert()
		.values(saveData)
		.orIgnore()
		.execute();
};

export const getAllGenres = async (): Promise<Genre[]> => {

	try{
		return await AppDBSource.getRepository(Genre).find();
	} catch(error){
		console.log(error);
		throw new Error('cannot get subGenres');
	}
};
