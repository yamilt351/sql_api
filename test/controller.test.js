import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js';

const myReq = request(app);

describe('get pizza', () => {
  it('it should return the whole content, GET /getPizza', async () => {
    const response = await myReq.get('/getPizza');
    expect(response.statusCode).to.be.equal(200);
  });
  it('it should handle errors properly', async () => {
    const response = await myReq.get('/getWine');
    expect(response.statusCode).to.be.equal(404);
    expect(response.body.message).to.be.equal('Not Found');
  });
});
