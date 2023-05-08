import * as dotenv from 'dotenv';
import "reflect-metadata"
import express, { Request, Response } from 'express';
import bodyParser from "body-parser";

import AppDBSource from './dbConnection';
import { IBookRequest } from './interfaces';
import { Book } from './entities';

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
	const {title, pages, type} = req.body as IBookRequest;

	const book = new Book();

	book.title = title;
	book.pages = pages;
	book.type = type;
	
	const bookRepository = AppDBSource.getRepository(Book);

	const result = await bookRepository.save(book);

	res.status(201).send(result);
});

server.listen(port, () => {
	console.log(`Server online on port ${port}`);
});
