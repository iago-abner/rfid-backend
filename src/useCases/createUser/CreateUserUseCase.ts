import { IUsersRepository } from "../../repositories/IUserRepository";

interface IRequest {
  name: string;
  tag: string;
  enrollment?: number
}

export class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  // Como o método não tem retorno, definimos como void
  execute({ name, tag, enrollment }: IRequest): void {
    console.log(name, tag, enrollment)
    const userAlreadyExists = this.usersRepository.findByName(name);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    this.usersRepository.create({ name, tag, enrollment });
  }
}

