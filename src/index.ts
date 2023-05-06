import * as dotenv from 'dotenv';
dotenv.config();

import "reflect-metadata"
import express, { Request, Response } from 'express';

import { Book } from './entities/book';
import AppDBSource from './dbConnection';

const server = express();
const port = 3000;


try{
	AppDBSource.initialize()
}
catch(error) {
	throw error;
}

server.get('/', (req: Request, res: Response ) => {
	res.status(200).send('all is working');
})

server.listen(port, () => {
	console.log(`Server online on post ${port}`);
});
