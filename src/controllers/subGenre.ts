import { validateOrReject } from 'class-validator';
import express, { Request, Response } from 'express';
import { NamesDTO } from '../dtos';
import { ISubGenreRequest } from '../interfaces';

export const subGenreRouter = express.Router();

subGenreRouter.post('/', async (req: Request, res: Response) => {
	const subGenreDTO = new NamesDTO(req.body as ISubGenreRequest);

	try{
		await validateOrReject(subGenreDTO, { validationError: { target: false } });
	} catch(error){
		return res.status(400).send(error);
	}
	return res.status(201).send();

});