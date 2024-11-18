# Task Management System API

## Overview

The **Task Management System API** is a RESTful service that helps users manage tasks effectively. It allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks and includes functionality to mark tasks as complete. The API is built using **Node.js** and **Express** and adheres to RESTful principles with proper error handling and input validation.

---

## Features

- **CRUD Operations**: Create, Read, Update, Delete tasks.
- **Mark Tasks as Complete**: Change the status of a task to `completed`.
- **Status Enum**: Tasks can have one of three statuses - `pending`, `in_progress`, or `completed`.
- **Timestamps**: Tracks `created_at` and `updated_at` for all tasks.
- **Error Handling**: Returns meaningful error messages with appropriate HTTP status codes.
- **Input Validation**: Ensures required fields are provided and properly formatted.
- **Unit Testing**: Covers critical functionalities like task creation and status updates.

---

## API Endpoints

### Task Endpoints

| HTTP Method | Endpoint                  | Description                 | Payload (JSON)                                                                                                                                              |
|-------------|---------------------------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **GET**     | `/tasks`                  | Retrieve all tasks          | None                                                                                                                                                       |
| **GET**     | `/tasks/:id`              | Retrieve a task by ID       | None                                                                                                                                                       |
| **POST**    | `/tasks`                  | Create a new task           | `{ "title": "string", "description": "string", "due_date": "YYYY-MM-DDTHH:mm:ss.sssZ" }`                                                                     |
| **PUT**     | `/tasks/:id`              | Update an existing task     | `{ "title": "string", "description": "string", "due_date": "YYYY-MM-DDTHH:mm:ss.sssZ" }`                                                                     |
| **DELETE**  | `/tasks/:id`              | Delete a task               | None                                                                                                                                                       |
| **PATCH**   | `/tasks/:id/complete`     | Mark a task as complete     | None                                                                                                                                                       |

---

## Task Properties

Each task contains the following properties:

| Property       | Type       | Description                                                                 |
|----------------|------------|-----------------------------------------------------------------------------|
| `id`           | String     | A unique identifier for the task.                                           |
| `title`        | String     | The title of the task.                                                      |
| `description`  | String     | A detailed description of the task.                                         |
| `due_date`     | Date       | The due date for the task in ISO 8601 format.                               |
| `status`       | Enum       | The task's status: `pending`, `in_progress`, or `completed`.                |
| `created_at`   | Timestamp  | The timestamp when the task was created.                                    |
| `updated_at`   | Timestamp  | The timestamp when the task was last updated.                               |

---

## Prerequisites

To run the application, ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/PaladuguSriTeja574/Task-Management.git
cd task-management


### 2. Install Dependencies
```bash
Copy code
npm install

### 3. Start the Server
```bash
Copy code
npm start
The server will start and listen on http://localhost:3000.

## Usage Instructions
You can test the API using tools like Postman, curl, or any HTTP client.

### Example Requests

### 1. Create a New Task
Request:
```bash
Copy code
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{
  "title": "Learn REST API",
  "description": "Understand how REST APIs work",
  "due_date": "2024-11-20T18:00:00.000Z"
}'

Response:
``json
Copy code
{
  "id": "12345",
  "title": "Learn REST API",
  "description": "Understand how REST APIs work",
  "due_date": "2024-11-20T18:00:00.000Z",
  "status": "pending",
  "created_at": "2024-11-17T15:30:00.000Z",
  "updated_at": "2024-11-17T15:30:00.000Z"
}

### 2. Retrieve All Tasks
Request:
```bash
Copy code
curl -X GET http://localhost:3000/tasks

### 3. Mark a Task as Complete
Request:
```bash
Copy code
curl -X PATCH http://localhost:3000/tasks/12345/complete



Here’s the README.md content in code format suitable for direct use in your project.

markdown
Copy code
# Task Management System API

## Overview

The **Task Management System API** is a RESTful service that helps users manage tasks effectively. It allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks and includes functionality to mark tasks as complete. The API is built using **Node.js** and **Express** and adheres to RESTful principles with proper error handling and input validation.

---

## Features

- **CRUD Operations**: Create, Read, Update, Delete tasks.
- **Mark Tasks as Complete**: Change the status of a task to `completed`.
- **Status Enum**: Tasks can have one of three statuses - `pending`, `in_progress`, or `completed`.
- **Timestamps**: Tracks `created_at` and `updated_at` for all tasks.
- **Error Handling**: Returns meaningful error messages with appropriate HTTP status codes.
- **Input Validation**: Ensures required fields are provided and properly formatted.
- **Unit Testing**: Covers critical functionalities like task creation and status updates.

---

## API Endpoints

### Task Endpoints

| HTTP Method | Endpoint                  | Description                 | Payload (JSON)                                                                                                                                              |
|-------------|---------------------------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **GET**     | `/tasks`                  | Retrieve all tasks          | None                                                                                                                                                       |
| **GET**     | `/tasks/:id`              | Retrieve a task by ID       | None                                                                                                                                                       |
| **POST**    | `/tasks`                  | Create a new task           | `{ "title": "string", "description": "string", "due_date": "YYYY-MM-DDTHH:mm:ss.sssZ" }`                                                                     |
| **PUT**     | `/tasks/:id`              | Update an existing task     | `{ "title": "string", "description": "string", "due_date": "YYYY-MM-DDTHH:mm:ss.sssZ" }`                                                                     |
| **DELETE**  | `/tasks/:id`              | Delete a task               | None                                                                                                                                                       |
| **PATCH**   | `/tasks/:id/complete`     | Mark a task as complete     | None                                                                                                                                                       |

---

## Task Properties

Each task contains the following properties:

| Property       | Type       | Description                                                                 |
|----------------|------------|-----------------------------------------------------------------------------|
| `id`           | String     | A unique identifier for the task.                                           |
| `title`        | String     | The title of the task.                                                      |
| `description`  | String     | A detailed description of the task.                                         |
| `due_date`     | Date       | The due date for the task in ISO 8601 format.                               |
| `status`       | Enum       | The task's status: `pending`, `in_progress`, or `completed`.                |
| `created_at`   | Timestamp  | The timestamp when the task was created.                                    |
| `updated_at`   | Timestamp  | The timestamp when the task was last updated.                               |

---

## Prerequisites

To run the application, ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<repository-name>.git
cd task-management
2. Install Dependencies
bash
Copy code
npm install
3. Start the Server
bash
Copy code
npm start
The server will start and listen on http://localhost:3000.

Usage Instructions
You can test the API using tools like Postman, curl, or any HTTP client.

Example Requests
1. Create a New Task
Request:

bash
Copy code
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{
  "title": "Learn REST API",
  "description": "Understand how REST APIs work",
  "due_date": "2024-11-20T18:00:00.000Z"
}'
Response:

json
Copy code
{
  "id": "12345",
  "title": "Learn REST API",
  "description": "Understand how REST APIs work",
  "due_date": "2024-11-20T18:00:00.000Z",
  "status": "pending",
  "created_at": "2024-11-17T15:30:00.000Z",
  "updated_at": "2024-11-17T15:30:00.000Z"
}
2. Retrieve All Tasks
Request:

bash
Copy code
curl -X GET http://localhost:3000/tasks
3. Mark a Task as Complete
Request:

bash
Copy code
curl -X PATCH http://localhost:3000/tasks/12345/complete
Testing
Unit tests are provided to validate critical functionalities.

##Run Tests
```bash
Copy code
npm test
Test Coverage
Task creation.
Task retrieval.
Marking tasks as complete.
