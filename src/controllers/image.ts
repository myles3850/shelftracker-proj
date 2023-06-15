import crypto from 'crypto';
import express, { Request, Response } from 'express';
import multer from 'multer';
import { addImageToBucket, insertImageReference } from '../services';

export const imageRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5_000_000 } }); //5MB filesize

imageRouter.post('/',upload.single('image'), async(req: Request, res: Response): Promise<any> =>{
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
