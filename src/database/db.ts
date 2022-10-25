import mongoose from 'mongoose';

export const connectMongodb = async (uri: string) => await mongoose.connect(uri)
.then((data) => {
  console.log('MongoDB Connection succeded')
})
.catch((err) => console.log(err.message))

