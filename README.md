Of course! Here's a basic but complete `README.md` for your **tasks-manager** project, which includes both the backend (API) and the frontend:

---

### 📁 `README.md`

```markdown
# 📝 Tasks Manager

A simple full-stack task management application built with **Node.js (Express)** for the backend and **React** for the frontend.

---

## 📦 Project Structure

```
tasks-manager/
├── task-api-memory/         # Backend (Node.js + Express)
└── task-manager-frontend/   # Frontend (React)
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rodrigowill/tasks-manager.git
cd tasks-manager
```

---

## 🛠️ Backend - Task API

### 📍 Location:
```bash
cd task-api-memory
```

### 📥 Install dependencies

```bash
npm install
```

### ▶️ Run the API

```bash
node server.js
```

The server will run on: [http://localhost:3001](http://localhost:3001)

> **Note:** Data is stored in memory (not persistent).

---

## 💻 Frontend - Task Manager

### 📍 Location:
```bash
cd task-manager-frontend
```

### 📥 Install dependencies

```bash
npm install
```

### ▶️ Start the React App

```bash
npm start
```

The frontend runs on: [http://localhost:3000](http://localhost:3000)

Make sure the backend (API) is running on port `3001`.

---

## 🔄 API Endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | `/tasks`         | List all tasks      |
| POST   | `/tasks`         | Create new task     |
| GET    | `/tasks/:id`     | Get task by ID      |
| PUT    | `/tasks/:id`     | Update task         |
| DELETE | `/tasks/:id`     | Delete task         |

---

## 🧪 Running Tests (Backend only)

```bash
npm test
```

Tests are written with **Mocha**, **Chai**, and **Supertest**.

---

## 🧰 Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: React, Tailwind CSS
- **Tests**: Mocha, Chai, Supertest
- **HTTP Client**: Axios

---

## 📌 Notes

- CORS is enabled on the backend to allow connection from the frontend.
- Tasks are not saved permanently (data resets on server restart).

---

## 👨‍💻 Author

Developed by [Rodrigo Soares](https://github.com/rodrigowill)

```

---

Se quiser, posso colocar esse `README.md` diretamente na pasta `tasks-manager` ou criar uma versão em português também. Quer que eu faça isso?
