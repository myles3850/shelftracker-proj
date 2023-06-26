import { validateOrReject } from 'class-validator';
import express, { Request, Response } from 'express';
import { BookDTO, IdDTO } from '../dtos';
import { IBookRequest } from '../interfaces';
import { createBook, getOneBook } from '../services';

export const bookRouter = express.Router();

bookRouter.post('/', async(req: Request, res: Response) => {
	const bookDTO = new BookDTO(req.body as IBookRequest);

	try{
		await validateOrReject(bookDTO, { validationError: { target: false } });
	} catch(error){
		return res.status(400).send(error);
	}

	try{
		const result = await createBook(bookDTO);
		return res.status(201).send(result);
	}catch(error){

		console.log(error);
		return res.status(500).send(error.message);
	}
});

bookRouter.get('/:id',async (req:Request, res: Response) => {
	const bookIdDTO = new IdDTO(req.params.id);

	try {
		await validateOrReject(bookIdDTO, { validationError: { target: false } });
	} catch (error) {
		return res.status(400).send(error);
	}

	try {
		const result = await getOneBook(parseInt(bookIdDTO.id));
		return res.status(200).send(result);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error.message);
	}
});
