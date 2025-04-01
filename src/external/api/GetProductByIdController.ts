import { Express } from 'express';
import GetProductById from '@/core/product/service/GetProductById';

export default class GetProductByIdController {
  constructor(server: Express, useCase: GetProductById, ...middlewares: any[]) {
    server.post('/api/products/:id', ...middlewares, async (req, resp) => {
      try {
        const result = await useCase.execute((req.params as any).id);

        resp.status(200).send(result);
      } catch (err: any) {
        resp.status(401).send(err.message);
      }
    });
  }
}
