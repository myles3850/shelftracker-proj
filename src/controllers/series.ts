import express, { Request, Response } from 'express';
import { SeriesDTO } from '../dtos';
import { validateOrReject } from 'class-validator';
import { createSeries } from '../services';

export const seriesRouter = express.Router();

seriesRouter.post('/', async (req: Request, res: Response) => {
	
	const seriesDTO = new SeriesDTO(req.body);

	try {
		await validateOrReject(seriesDTO, { validationError: { target:false } });
	} catch (error) {
		return res.status(400).send(error);
	}

	try {
		const result = await createSeries(seriesDTO);
		return res.status(201).send(result);
	} catch (error) {
		return res.status(500).send(error.message);

	}
});