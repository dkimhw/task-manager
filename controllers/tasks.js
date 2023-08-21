
import Task from '../models/task.js';



export const getAllTasks = (req, res) => {
  res.send('all tasks')
}

export const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
}

export const getTask = (req, res) => {
  res.send({...req.params, 'type': 'get' });
}

export const updateTask = (req, res) => {
  res.send({...req.params, 'type': 'update' });
}

export const deleteTask = (req, res) => {
  res.json({...req.params, 'type': 'delete' });
}
