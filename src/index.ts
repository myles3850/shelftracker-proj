import * as dotenv from 'dotenv';
import "reflect-metadata"
import express, { Request, Response } from 'express';
import bodyParser from "body-parser";

import AppDBSource from './dbConnection';
import { IBookRequest } from './interfaces';
import { Book } from './entities';
import { BookDTO } from './dtos';
import { validate, validateOrReject } from 'class-validator';

dotenv.config();
const server = express();
const port = process.env.APP_PORT;

server.use(bodyParser.json())

AppDBSource.initialize()
	.then(() => console.log(`database connected on port ${process.env.DB_PORT}`))
	.catch((e) => {throw new Error(e.message)});

server.get('/', (req: Request, res: Response ) => {
	res.status(200).send('all is working');
});

server.post('/book' , async (req: Request, res: Response) =>{
	const bookDTO = new BookDTO(req.body as IBookRequest);

	try{
		await validateOrReject(bookDTO, { validationError: { target: false } });
	} catch(error){
		return res.status(400).send(error);
	}

	const {title, pages, type} = bookDTO;

	try{
		const book = new Book();
		book.title = title;
		book.pages = pages;
		book.type = type;

		const bookRepository = AppDBSource.getRepository(Book);
		const result = await bookRepository.save(book);

		return res.status(201).send(result);
	} catch(error) {
		return res.status(500).send([error.message, error.sql] || 'error updating book record')
	}
});

server.listen(port, () => {
	console.log(`Server online on port ${port}`);
});
