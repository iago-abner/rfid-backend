import { User } from '../models/user'
// DTO => Data Transfer Object
export interface ICreateUserDTO {
  name: string,
  tag: string,
  enrollment?: number
}

export interface IUsersRepository{
  create({name, tag, enrollment}: ICreateUserDTO) : void;
  findByName(name: string): any
  findByTag(tag: string): any
  list(): User[]
}
