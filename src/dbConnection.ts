import * as dotenv from 'dotenv';
dotenv.config();

import { DataSource } from 'typeorm';
const AppDBSource = new DataSource({
	type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['src/entities/**/*.ts'],
	migrations: ['src/migrations/**/*.ts'],
    logging: false,
	synchronize: false,
	

});

export default AppDBSource;