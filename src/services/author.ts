import AppDBSource from '../dbConnection';
import { AuthorDTO } from '../dtos';
import { Author } from '../entities';

export const postAuthor = async (authorDTO: AuthorDTO): Promise<Author> => {
	
	const { name } = authorDTO;
	try{
		const author = new Author();
		author.name = name;

		return await AppDBSource.getRepository(Author).save(author);


	} catch (error){
		console.log(error);
		throw new Error('unable to save author error');
	}

};

export const getAllAuthors =async (): Promise<Author[]> => {
	try{
		return await AppDBSource.getRepository(Author).find();
	} catch(error){
		console.log(error);
		throw new Error('cannot get authors');
	}
};
