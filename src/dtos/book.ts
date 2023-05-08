import {IsString, MaxLength, IsInt, IsNotEmpty, IsPositive, IsEnum} from 'class-validator'

import { EBookTypes } from "../enums";
import { IBookRequest } from "../interfaces";

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

  constructor(body: IBookRequest) {
    this.title = body.title;
    this.pages = body.pages;
    this.type = body.type;
  }
}