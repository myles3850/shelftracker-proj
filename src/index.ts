import * as dotenv from 'dotenv';
dotenv.config();

import "reflect-metadata"
import express, { Request, Response } from 'express';
import { DataSource } from 'typeorm';

import { Book } from './entities/book';

const server = express();
const port = 3000;

const AppDBSource = new DataSource({
	type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Book],
    logging: false,
	synchronize: false,
})

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
