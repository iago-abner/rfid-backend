import { model, Schema } from 'mongoose'
import {ICreateUserDTO} from '../repositories/IUserRepository'

const userSchema  = new Schema<ICreateUserDTO>({
  name: { type: String, required: true },
  tag: { type: String, required: true },
  enrollment: Number
}, {
  collection: 'User',
  versionKey: false
})

export const User = model<ICreateUserDTO>('User', userSchema )