const axios = require('axios');

// Base URL for the API
const BASE_URL = 'http://localhost:3000/tasks';

/**
 * Fetch all tasks
 */
async function fetchAllTasks() {
  try {
    const response = await axios.get(BASE_URL);
    console.log('All Tasks:', response.data);
  } catch (error) {
    console.error('Error fetching all tasks:', error.response?.data || error.message);
  }
}

/**
 * Fetch a task by ID
 */
async function fetchTaskById(taskId) {
  try {
    const response = await axios.get(`${BASE_URL}/${taskId}`);
    console.log(`Task with ID ${taskId}:`, response.data);
  } catch (error) {
    console.error(`Error fetching task with ID ${taskId}:`, error.response?.data || error.message);
  }
}

/**
 * Create a new task
 */
async function createTask() {
  try {
    const newTask = {
      title: 'New Task from Axios',
      description: 'This task was created using Axios',
      dueDate: '2024-11-20T18:00:00.000Z',
    };

    const response = await axios.post(BASE_URL, newTask);
    console.log('Created Task:', response.data);
    return response.data.id; // Return the ID of the newly created task
  } catch (error) {
    console.error('Error creating task:', error.response?.data || error.message);
  }
}

/**
 * Update an existing task
 */
async function updateTask(taskId) {
  try {
    const updatedTask = {
      title: 'Updated Task Title',
      description: 'Updated description for this task',
      dueDate: '2024-11-25T18:00:00.000Z',
    };

    const response = await axios.put(`${BASE_URL}/${taskId}`, updatedTask);
    console.log(`Updated Task with ID ${taskId}:`, response.data);
  } catch (error) {
    console.error(`Error updating task with ID ${taskId}:`, error.response?.data || error.message);
  }
}

/**
 * Mark a task as complete
 */
async function markTaskAsComplete(taskId) {
  try {
    const response = await axios.patch(`${BASE_URL}/${taskId}/complete`);
    console.log(`Task with ID ${taskId} marked as complete:`, response.data);
  } catch (error) {
    console.error(`Error marking task with ID ${taskId} as complete:`, error.response?.data || error.message);
  }
}

/**
 * Delete a task
 */
async function deleteTask(taskId) {
  try {
    await axios.delete(`${BASE_URL}/${taskId}`);
    console.log(`Task with ID ${taskId} deleted.`);
  } catch (error) {
    console.error(`Error deleting task with ID ${taskId}:`, error.response?.data || error.message);
  }
}

/**
 * Main function to execute all steps
 */
async function main() {
  console.log('Step 1: Fetch all tasks (initial)');
  await fetchAllTasks();

  console.log('\nStep 2: Create a new task');
  const taskId = await createTask();

  console.log('\nStep 3: Fetch the newly created task by ID');
  if (taskId) {
    await fetchTaskById(taskId);
  }

  console.log('\nStep 4: Update the newly created task');
  if (taskId) {
    await updateTask(taskId);
  }

  console.log('\nStep 5: Mark the task as complete');
  if (taskId) {
    await markTaskAsComplete(taskId);
  }

  console.log('\nStep 6: Fetch all tasks (after updates)');
  await fetchAllTasks();

  console.log('\nStep 7: Delete the task');
  if (taskId) {
    await deleteTask(taskId);
  }

  console.log('\nStep 8: Fetch all tasks (final)');
  await fetchAllTasks();
}

// Execute the main function
main();
