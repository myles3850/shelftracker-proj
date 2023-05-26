import { validateOrReject } from 'class-validator';
import express, { Request, Response } from 'express'; 
import { AuthorDTO } from '../dtos';
import { IAuthorRequest } from '../interfaces';
import { postAuthor } from '../services';

export const authorRouter = express.Router();

authorRouter.post('/', async (req: Request, res: Response) => {

	const authorDTO = new AuthorDTO(req.body as IAuthorRequest);

	try{
		await validateOrReject(authorDTO, { validationError: { target:false } });
	}catch(error){
		return res.status(400).send(error);
	}

	try {
		const result = await postAuthor(authorDTO);
		return res.status(201).send(result);
	} catch (error) {
		return res.status(500).send(error.message);
	}
	

});
