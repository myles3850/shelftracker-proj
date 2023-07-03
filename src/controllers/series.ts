import express, { Request, Response } from 'express';
import { IdDTO, SeriesDTO } from '../dtos';
import { validateOrReject } from 'class-validator';
import { createSeries, getAllSeries, getOneSeries } from '../services';

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

seriesRouter.get('/all', async (req: Request, res: Response) => {
	try {
		const result = await getAllSeries();
		return res.status(200).send(result);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

seriesRouter.get('/:id', async (req: Request, res: Response) => {
	const idDTO = new IdDTO(req.params.id);
	try {
		await validateOrReject(idDTO, { validationError: { target:false } });
	} catch (error) {
		return res.status(400).send(error);
	}
	try {
		const result = await getOneSeries(idDTO);
		return res.status(200).send(result);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});