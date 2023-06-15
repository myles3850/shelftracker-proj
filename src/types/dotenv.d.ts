declare namespace NodeJS{
	interface ProcessEnv {
		DB_HOST: string,
		DB_PORT: string,
		DB_DATABASE: string,
		DB_USERNAME: string,
		DB_PASSWORD: string,
		APP_PORT: string,
		S3_ADDRESS: string,
		S3_PORT: string,
		S3_BUCKET: string,
		S3_ID: string,
		S3_SECRET: string,

	}
}