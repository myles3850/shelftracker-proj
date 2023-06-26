import crypto from 'crypto';
import express, { Request, Response } from 'express';
import multer from 'multer';
import { addImageToBucket, getImageReference, insertImageReference } from '../services';
import { IdDTO } from '../dtos';
import { validateOrReject } from 'class-validator';

export const imageRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5_000_000 } }); //5MB filesize

imageRouter.post('/',upload.single('image'), async(req: Request, res: Response): Promise<void> =>{
 const { buffer, mimetype } = req.file;
 const filename = crypto.randomUUID();

 const fileExtension = mimetype.split('/')[1];

 const { S3_ADDRESS, S3_PORT, S3_BUCKET } = process.env;
 const imageURL = `http://${ S3_ADDRESS }:${ S3_PORT }/${ S3_BUCKET }/${ filename }.${ fileExtension }`;

	try {
		await addImageToBucket(`${ filename }.${ fileExtension }`, buffer, mimetype);
		const imageId = await insertImageReference(imageURL);
		res.status(201).send({ imageId });
	} catch (error) {
		res.status(500).send(error.message);
	}

});

imageRouter.get('/:id', async (req: Request, res: Response) => {

	const imageDTO = new IdDTO(req.params.id);

	try{
		await validateOrReject(imageDTO, { validationError: { target:false } });
	}catch(error){
		return res.status(400).send(error);
	}

	try {
		const result = await getImageReference(imageDTO);
		res.status(200).send(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});