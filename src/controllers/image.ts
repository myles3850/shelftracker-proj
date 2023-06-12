import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';

export const imageRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5_000_000 } }); //5MB filesize




imageRouter.post('/',upload.single('image'), async(req: Request, res: Response): Promise<any> =>{
 const { originalname, buffer } = req.file;

	try {
		const filePath = path.join(destinationPath, originalname);
		res.send();
	} catch (error) {
		console.log(error)
		res.send();
	}



});