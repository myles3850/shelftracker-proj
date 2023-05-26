import { Book } from '../entities';

export interface IAuthorRequest {
	name: string;
	active?: boolean;
}