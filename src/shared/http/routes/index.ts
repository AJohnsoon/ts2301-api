import { Router } from 'express';
import { STATUS_CODES } from 'http';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({
    data: { message: 'Health OK!', status: 200 },
  });
});

export default routes;
