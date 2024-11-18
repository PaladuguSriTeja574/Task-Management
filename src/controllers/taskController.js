const Task = require("../models/task");

let tasks = [
    {
      "id": "1a2b3c4d-5678-90ef-ghij-klmnopqrstuv",
      "title": "Learn REST API",
      "description": "Understand REST principles and build APIs",
      "dueDate": "2024-11-20T18:00:00.000Z",
      "status": "pending",
      "createdAt": "2024-11-17T15:30:00.000Z",
      "updatedAt": "2024-11-17T15:30:00.000Z"
    },
    {
      "id": "2a2b3c4d-5678-90ef-ghij-klmnopqrstuv",
      "title": "Build Task Manager",
      "description": "Implement a full-stack task manager app",
      "dueDate": "2024-11-25T18:00:00.000Z",
      "status": "in_progress",
      "createdAt": "2024-11-17T16:00:00.000Z",
      "updatedAt": "2024-11-17T16:15:00.000Z"
    }
  ]; // In-memory storage

// Get all tasks
const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

// Get a task by ID
const getTaskById = (req, res) => {
  const task = tasks.find((task) => task.id === req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json(task);
};

// Create a new task
const createTask = (req, res) => {
  const { title, description, dueDate } = req.body;
  if (!title || !dueDate) {
    return res.status(400).json({ message: "Title and due date are required" });
  }
  const newTask = new Task(title, description, new Date(dueDate));
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Update an existing task
const updateTask = (req, res) => {
  const task = tasks.find((task) => task.id === req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  const { title, description, dueDate } = req.body;
  if (title) task.title = title;
  if (description) task.description = description;
  if (dueDate) task.dueDate = new Date(dueDate);
  task.updatedAt = new Date();
  res.status(200).json(task);
};

// Delete a task
const deleteTask = (req, res) => {
  tasks = tasks.filter((task) => task.id !== req.params.id);
  res.status(204).send(); // No content
};

// Mark a task as complete
const markTaskAsComplete = (req, res) => {
  const task = tasks.find((task) => task.id === req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  task.status = "completed";
  task.updatedAt = new Date();
  res.status(200).json(task);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  markTaskAsComplete,
};
 
