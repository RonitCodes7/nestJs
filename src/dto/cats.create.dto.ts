// import { IsString, IsInt } from 'class-validator';
import * as Joi from 'joi';
export const createCatSchema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().integer().min(0).required(),
  breed: Joi.string().optional()
});
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
  