import AppDBSource from '../dbConnection';
import { SubGenreDTO } from '../dtos';
import { SubGenre } from '../entities';

export const saveSubGenres = async (dto: SubGenreDTO): Promise<void> => {
	const { names } = dto;

	const saveData = names.map(name => {
		const subGenreEntity = new SubGenre();
		subGenreEntity.name = name;

		return subGenreEntity;
	});

	await AppDBSource.getRepository(SubGenre)
		.createQueryBuilder()
		.insert()
		.values(saveData)
		.orIgnore()
		.execute();
};

export const getAllSubgenres = async (): Promise<SubGenre[]> => {

	try{
		return await AppDBSource.getRepository(SubGenre).find();
	} catch(error){
		console.log(error);
		throw new Error('cannot get subGenres');
	}
};
