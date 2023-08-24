
import Task from '../models/task.js';



export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({'msg': err});
  }
}

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({'msg': err});
  }
}

export const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({
      _id: taskID
    });

    if (!task) {
      return res.status(404).json({
        msg: `No task with id: ${taskID}`
      });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({'msg': err});
  }
}

export const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const {
      completed,
      task
    } = req.body;


    res.status(200).json({id: taskID, data: req.body});
  } catch (err) {

  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) return res.status(404).json({'msg': `No task id with ${taskID}`});
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({'msg': err});
  }
}
