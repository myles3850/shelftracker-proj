import { EBookTypes } from '../enums';

export interface IBookRequest {
  title: string;
  pages: number;
  type: EBookTypes;
  authorId?: number;
  imageId?: number;
}