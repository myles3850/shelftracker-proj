import * as dotenv from 'dotenv';
import 'reflect-metadata';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';


import AppDBSource from './dbConnection';
import { bookRouter } from './controllers';

dotenv.config();
const server = express();
const port = process.env.APP_PORT;

server.use(bodyParser.json());

AppDBSource.initialize()
	.then(() => console.log(`database connected on port ${ process.env.DB_PORT }`))
	.catch((e) => {throw new Error(e.message);});

server.get('/', (req: Request, res: Response ) => {
	res.status(200).send('all is working');
});

server.use('/book', bookRouter);

server.listen(port, () => {
	console.log(`Server online on port ${ port }`);
});
