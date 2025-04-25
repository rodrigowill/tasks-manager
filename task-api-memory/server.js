const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Permite requisições de outras origens (como o React)
app.use(express.json()); // Permite ler JSON no body das requisições

// Dados em memória
let tasks = [];

// Rotas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = { id: uuidv4(), ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).send('Task not found');
  res.json(task);
});

app.put('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).send('Task not found');
  tasks[index] = { ...tasks[index], ...req.body };
  res.json(tasks[index]);
});

app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).send('Task not found');
  tasks.splice(index, 1);
  res.status(204).send();
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
