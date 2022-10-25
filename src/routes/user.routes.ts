import { Router, Request, Response } from "express";
import { createUserController } from '../useCases/createUser'

export const usersRoutes = Router();

usersRoutes.post("/", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

// usersRoutes.get("/", (request: Request, response: Response) => {
//   return listCategoriesController.handle(request, response);
// });



