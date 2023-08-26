
import express from 'express';
import taskRoutes from './routes/tasks.js';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import notFound from './middleware/not-found.js';

dotenv.config({path: './.env'});
const app = express();

// Middlewares
app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
app.use('/api/v1/tasks', taskRoutes);
app.use(notFound);


// Start server
const port = 4000;
const connectionStr = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`

const start = async () => {
  try {
    await connectDB(connectionStr);
    app.listen(port, console.log(`Listening on port: ${port}`));
  } catch (err) {
    throw new Error(err);
  }
}

start();
