import * as minio from 'minio';
import AppDBSource from '../dbConnection';
import { Image } from '../entities';
import { IdDTO } from '../dtos';

const getBucketConnection = ()=> new minio.Client({
	endPoint: process.env.S3_ADDRESS,
	port: parseInt(process.env.S3_PORT),
	useSSL: false,
	accessKey: process.env.S3_ID,
	secretKey: process.env.S3_SECRET,
});

export const addImageToBucket = async (filename: string, buffer: Buffer, mimetype: string): Promise<void> => {

	try{
		const bucketConnection = getBucketConnection();
		await bucketConnection.putObject(process.env.S3_BUCKET, filename, buffer, buffer.length,
			{ 'Content-Type': mimetype });
	} catch(error){
		throw new Error(error.message);
	}
};

export const insertImageReference = async (imageURL:string): Promise<number> => {
	const imageRepository = AppDBSource.getRepository(Image);
	
	const imageReference = new Image();
	imageReference.url = imageURL;

	try {
		const result = await imageRepository.save(imageReference);
		return result.id;
	} catch (error) {
		throw new Error(error.sqlMessage);
	}
};

export const getImageReference = async (idDTO: IdDTO): Promise<Image> => {
	const imageRepository = AppDBSource.getRepository(Image);
	const id = idDTO.id;
	try {
		return await imageRepository.findOne ({ where:{ id: parseInt(id) } });
	} catch (error) {
		throw new Error(error);
	}
};
