import { AuthorDTO } from '../dtos';
import { Author } from '../entities';

export const postAuthor = async (authorDTO: AuthorDTO): Promise<Author> => {
	
	const {name, active, books} = authorDTO;
	try{
		const author = new Author();
		author.name = name;
		

	}

}