import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose.connect(url,  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
   });
};

export default connectDB;
