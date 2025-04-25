import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', status: 'pending', dueDate: '' });
  const [editingTaskId, setEditingTaskId] = useState(null);

  const API_URL = 'http://localhost:3001/tasks';

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTaskId) {
        await axios.put(`${API_URL}/${editingTaskId}`, form);
        setEditingTaskId(null);
      } else {
        await axios.post(API_URL, form);
      }
      setForm({ title: '', description: '', status: 'pending', dueDate: '' });
      fetchTasks();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erro ao criar task. Veja o console.');
    }
  };

  const handleEdit = (task) => {
    setForm(task);
    setEditingTaskId(task.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full border p-2" />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2" />
        <input name="dueDate" type="date" value={form.dueDate} onChange={handleChange} className="w-full border p-2" />
        <select name="status" value={form.status} onChange={handleChange} className="w-full border p-2">
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">{editingTaskId ? 'Update' : 'Add'} Task</button>
      </form>

      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="border p-4 flex justify-between items-start">
            <div>
              <h2 className="font-semibold">{task.title}</h2>
              <p>{task.description}</p>
              <p className="text-sm">Due: {task.dueDate}</p>
              <p className="text-sm">Status: {task.status}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(task)} className="text-blue-500">Edit</button>
              <button onClick={() => handleDelete(task.id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
