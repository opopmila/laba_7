const express = require('express');
const app = express();

app.use(express.json());

let todoList = [
  { id: 1, task: 'Task 1' },
  { id: 2, task: 'Task 2' },
  { id: 3, task: 'Task 3' }
];

app.get('/api/list', (req, res) => {
  res.json(todoList);
});

app.post('/api/list', (req, res) => {
  const newTask = req.body.task;
  const newId = todoList.length + 1;
  const task = { id: newId, task: newTask };
  todoList.push(task);
  res.status(201).json(task);
});

app.put('/api/list/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newTask = req.body.task;
  const taskIndex = todoList.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    todoList[taskIndex].task = newTask;
    res.json(todoList[taskIndex]);
  } else {
    res.status(404).json({ message: 'Задача не найдена' });
  }
});

app.delete('/api/list/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = todoList.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    const deletedTask = todoList.splice(taskIndex, 1);
    res.json(deletedTask[0]);
  } else {
    res.status(404).json({ message: 'Задача не найдена' });
  }
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});