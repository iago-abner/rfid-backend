import { User } from '../../models/user'

import {ICreateUserDTO, IUsersRepository} from '../IUserRepository'

export class UserRepository implements IUsersRepository{
  private users: User[]

  private static INSTANCE: UserRepository
  constructor(){
    this.users = []
  }

  public static getInstance(): UserRepository{
    if(!UserRepository.INSTANCE){
      UserRepository.INSTANCE = new UserRepository();
    }
    return UserRepository.INSTANCE
  }

  create({ name, tag, enrollment }: ICreateUserDTO) {
    const user = new User();

    Object.assign(user, {
      name,
      tag,
      enrollment
    });

    this.users.push(user)
  }

  list(): User[] {
    return this.users
  }

  findByName(name: string) {
    const user = this.users.find((user) => user.name === name);
    return user
  }
  
  findByTag(tag: string) {
    const user = this.users.find((user) => user.tag === tag);
    return user
  }
}