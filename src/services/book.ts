import AppDBSource from '../dbConnection';
import { BookDTO } from '../dtos';
import { Book } from '../entities';

export const createBook = async (bookDTO: BookDTO): Promise<Book> => {
  const { title, pages, type, authorId, imageId } = bookDTO;

  try {
    const book = new Book();
    book.title = title;
    book.pages = pages;
    book.type = type;
	book.authorId = authorId || null;
	book.imageId = imageId || null;

    const bookRepository = AppDBSource.getRepository(Book);
    const result = await bookRepository.save(book);

    return result;
  } catch (error) {
    throw new Error(`something went wrong updating the book record: ${ error.message }`);
  }
};

export const getOneBook = async (id: number): Promise<Book> => {

	try {
		const bookRepository = AppDBSource.getRepository(Book);
		const result = await bookRepository.findOne({ where: { id } });
		return result;
	} catch (error) {
		throw new Error(`something went wrong retrieving the book: ${ error.message }`);

	}
};
