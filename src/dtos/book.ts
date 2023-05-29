import { IsString, MaxLength, IsInt, IsNotEmpty, IsPositive, IsEnum, IsOptional } from 'class-validator';

import { EBookTypes } from '../enums';
import { IBookRequest } from '../interfaces';

export class BookDTO {

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  pages: number;

  @IsNotEmpty()
  @IsEnum(EBookTypes)
  type: EBookTypes;

  @IsOptional()
  @IsInt()
  @IsPositive()
  authorId?: number;

  constructor(body: IBookRequest) {
    this.title = body.title;
    this.pages = body.pages;
    this.type = body.type;
	if (body.authorId || body.authorId >= 0) {
		this.authorId = body.authorId;
	}
  }
}