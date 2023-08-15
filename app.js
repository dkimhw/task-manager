
import express from 'express';
import taskRoutes from './routes/tasks.js';

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send("Hello - home page");
});

console.log('blah');

app.use('/api/v1/tasks', taskRoutes);



// Start server
const port = 4000;
app.listen(port, console.log("hello"));
