const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../models/index');

beforeAll(async () => {
  await sequelize.sync();
});

describe('Pruebas estatus end points', () => {
  test('Debe retorna código 302 por que el endpoint no existe', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(302);
  });

  test('Debe retorna el código status 200 para el api que retorna los servidores', async () => {
    const response = await request(app).get('/api/v1/servers');
    expect(response.statusCode).toBe(200);
  });

  test('Debe retorna el código status 200 para el api que retorna a un solo log de servidor', async () => {
    const response = await request(app).get('/api/v1/servers/1/logs');
    expect(response.statusCode).toBe(200);
  });

  test('Debe retorna el código status 200 para el api que retorna a todos los logs del servidor', async () => {
    const response = await request(app).get('/api/v1/logs');
    expect(response.statusCode).toBe(200);
  });
});

describe('Pruebas respuesta end points', () => {
  test('GET: /api/v1/servers -  Debe retorna el total de elementos en una llamada a una api con paginación', async () => {
    const res = await request(app).get('/api/v1/servers?page=0&size=10').set('Accept', 'application/json');
    expect(res.body.scheme.totalItems).toBeGreaterThanOrEqual(0);
    expect(res.body.scheme.totalPages).toBeGreaterThanOrEqual(0);
    expect(res.body.scheme.currentPage).toBeGreaterThanOrEqual(0);
  });

  test('GET: /api/v1/logs -  Debe retorna el total de elementos en una llamada a una api con paginación', async () => {
    const res = await request(app).get('/api/v1/logs?page=0&size=10').set('Accept', 'application/json');
    expect(res.body.scheme.totalItems).toBeGreaterThanOrEqual(0);
    expect(res.body.scheme.totalPages).toBeGreaterThanOrEqual(0);
    expect(res.body.scheme.currentPage).toBeGreaterThanOrEqual(0);
  });
});

afterAll(async () => {
  await sequelize.close();
});
