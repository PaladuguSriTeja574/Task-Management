const request = require("supertest");
const app = require("../src/app");

describe("Task API", () => {
  it("should create a task", async () => {
    const response = await request(app).post("/tasks").send({
      title: "Test Task",
      description: "This is a test task",
      dueDate: "2024-11-17T23:59:59.000Z",
    });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe("Test Task");
  });

  it("should retrieve all tasks", async () => {
    const response = await request(app).get("/tasks");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

