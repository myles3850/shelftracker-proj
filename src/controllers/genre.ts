import { validateOrReject } from 'class-validator';
import express, { Request, Response } from 'express';
import { GenreDTO } from '../dtos';
import { IGenreRequest } from '../interfaces';
import { getAllGenres, saveGenres } from '../services/genre';

export const GenreRouter = express.Router();

GenreRouter.post('/', async (req: Request, res: Response) => {
	const genreDTO = new GenreDTO(req.body as IGenreRequest);

	try{
		await validateOrReject(genreDTO, { validationError: { target: false } });
	} catch(error){
		return res.status(400).send(error);
	}

	try {
		await saveGenres(genreDTO);
		return res.status(201).send();
	} catch (error) {
		console.log(error);
		return res.status(500).send(error.message);

	}
});

GenreRouter.get('/all',async (req: Request, res: Response) => {
	try {
		const result = await getAllGenres();
		return res.status(200).send(result);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error.message);

	}
});
