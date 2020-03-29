import request from 'supertest';

import server from './server';

describe('Server', () => {
  it('should handle the health endpoint', async () => {
    const res = await request(server).get('/api/health');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: '😊' });
  });

  it('should handle missing endpoints', async () => {
    const res = await request(server).get('/api/missing');

    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ message: 'API endpoint not found!' });
  });

  xit('should handle SSR rendering of the view', async () => {});
});
