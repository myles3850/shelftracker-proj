import AppDBSource from '../dbConnection';
import { BookDTO } from '../dtos';
import { Book } from '../entities';

export const createBook = async (bookDTO: BookDTO): Promise<Book> => {
  const { title, pages, type } = bookDTO;

  try {
    const book = new Book();
    book.title = title;
    book.pages = pages;
    book.type = type;

    const bookRepository = AppDBSource.getRepository(Book);
    const result = await bookRepository.save(book);

    return result;
  } catch (error) {
    throw new Error(`something went wrong updating the book record: ${ error.message }`);
  }
};
