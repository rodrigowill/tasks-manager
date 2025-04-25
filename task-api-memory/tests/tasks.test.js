const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Task API', () => {
  //let taskId;

  let createdTask;

  beforeEach(async () => {
    const res = await request(app).post('/tasks').send({
      title: 'Temp Task',
      description: 'For testing',
      status: 'pending',
      dueDate: '2025-05-01'
    });
    createdTask = res.body;
  });

  it('should create a new task', async () => {
    expect(createdTask).to.have.property('id');
    expect(createdTask).to.have.property('title', 'Temp Task');
  });

  it('should fetch all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).equal(200);
    expect(Array.isArray(res.body)).to.be.true;
  });

  it('should get a task by ID', async () => {
    const res = await request(app).get(`/tasks/${createdTask.id}`);
    expect(res.statusCode).equal(200);
    expect(res.body).to.have.property('id', createdTask.id);
  });

  it('should update a task', async () => {
    const res = await request(app)
      .put(`/tasks/${createdTask.id}`)
      .send({ title: 'Updated Title' });
    expect(res.statusCode).equal(200);
    expect(res.body).to.have.property('title', 'Updated Title');
  });

  it('should delete a task', async () => {
    const res = await request(app).delete(`/tasks/${createdTask.id}`);
    expect(res.statusCode).equal(204);
  });
});