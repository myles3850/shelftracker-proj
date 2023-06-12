declare namespace NodeJS{
	interface ProcessEnv {
		DB_HOST: string,
		DB_PORT: string,
		DB_DATABASE: string,
		DB_USERNAME: string,
		DB_PASSWORD: string,
		APP_PORT: string,
		FS_ADDRESS: string,
	}
}