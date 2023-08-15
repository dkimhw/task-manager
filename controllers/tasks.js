
export const getAllTasks = (req, res) => {
  res.send('all tasks')
}

export const createTask = (req, res) => {
  res.json(req.body);
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
