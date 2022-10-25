import { Request, Response } from "express";
import { User } from '../../database/schema'
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, tag, enrollment } = request.body;

    const user = await User.create(request.body)

    this.createUserUseCase.execute({ name, tag, enrollment});

    return response.status(201).send();
  }
}

