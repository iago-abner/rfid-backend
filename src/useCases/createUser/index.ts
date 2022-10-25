import { UserRepository } from "../../repositories/implementation/userRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const usersRepository = UserRepository.getInstance();

const createUserUseCase = new CreateUserUseCase(usersRepository);

export const createUserController = new CreateUserController(
  createUserUseCase
);


