import { model, Schema } from 'mongoose'

interface IUser {
  name: String,
  tag: String,
  enrollment?: Number
}

const userSchema  = new Schema<IUser>({
  name: { type: String, required: true },
  tag: { type: String, required: true },
  enrollment: Number
}, {
  collection: 'User',
  versionKey: false
})

export const User = model<IUser>('User', userSchema )