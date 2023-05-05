import "reflect-metadata"
import express, { Request, Response } from 'express';

const server = express();
const port = 3000;

server.get('/', (req: Request, res: Response ) => {
	res.status(200).send('all is working');
})

server.listen(port, () => {
	console.log(`Server online on post ${port}`);
});
