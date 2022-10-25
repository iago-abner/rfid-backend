import { Request, Response } from "express";
import { User } from "../models/user";

export const UserController = {
  async find(req:Request, res: Response): Promise<Response> {
    const user = await User.find()
    return res.json(user)
  },

  async findByTag(req:Request, res: Response): Promise<Response> {
    const { tag } = req.params
    const user = await User.findById(tag)
    return res.json(user)
  }, 

  async create(req:Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)
    return res.json(user)
  },

  async delete(req:Request, res: Response): Promise<Response> {
    const { tag } = req.params
    const user = await User.findByIdAndDelete(tag)
    return res.json(user)
  }, 
}