const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const tasks = [];

// Create Task
router.post('/', (req, res) => {
  const { title, description, status = 'pending', dueDate } = req.body;
  const newTask = { id: uuidv4(), title, description, status, dueDate };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Get All Tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Get Task by ID
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
});

// Update Task
router.put('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  const { title, description, status, dueDate } = req.body;
  tasks[index] = { ...tasks[index], title, description, status, dueDate };
  res.json(tasks[index]);
});

// Delete Task
router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });
  tasks.splice(index, 1);
  res.status(204).send();
});

module.exports = router;

