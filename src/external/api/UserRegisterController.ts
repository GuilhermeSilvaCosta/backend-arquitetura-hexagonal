import UserRegister from '@/core/user/service/UserRegister';
import { Express } from 'express';

export default class UserRegisterController {
  constructor(server: Express, useCase: UserRegister) {
    server.post('/api/users', async (req, resp) => {
      try {
        await useCase.execute({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        resp.status(201).send();
      } catch (err: any) {
        resp.status(400).send(err.message);
      }
    });
  }
}
