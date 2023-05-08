import * as dotenv from 'dotenv';
import "reflect-metadata"
import express, { Request, Response } from 'express';
import AppDBSource from './dbConnection';

dotenv.config();
const server = express();
const port = process.env.APP_PORT;

AppDBSource.initialize()
	.then(() => console.log(`database connected on port ${process.env.DB_PORT}`))
	.catch((e) => {throw new Error(e.message)});

server.get('/', (req: Request, res: Response ) => {
	res.status(200).send('all is working');
});

server.listen(port, () => {
	console.log(`Server online on post ${port}`);
});
