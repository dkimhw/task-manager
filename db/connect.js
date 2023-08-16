import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

const connectionStr = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`

mongoose.connect();

console.log(process.env.MONGODB_PASSWORD)
