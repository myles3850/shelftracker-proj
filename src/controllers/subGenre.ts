import { validateOrReject } from 'class-validator';
import express, { Request, Response } from 'express';
import { SubGenreDTO } from '../dtos';
import { ISubGenreRequest } from '../interfaces';
import { getAllSubgenres, saveSubGenres } from '../services';

export const subGenreRouter = express.Router();

subGenreRouter.post('/', async (req: Request, res: Response) => {
	const subGenreDTO = new SubGenreDTO(req.body as ISubGenreRequest);

	try{
		await validateOrReject(subGenreDTO, { validationError: { target: false } });
	} catch(error){
		return res.status(400).send(error);
	}

	try {
		await saveSubGenres(subGenreDTO);
		return res.status(201).send();
	} catch (error) {
		console.log(error);
		return res.status(500).send(error.message);

	}
});

subGenreRouter.get('/all',async (req: Request, res: Response) => {
	try {
		const result = await getAllSubgenres();
		return res.status(200).send(result);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error.message);

	}
});
