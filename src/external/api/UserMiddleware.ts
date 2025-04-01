import { Request, Response, NextFunction } from 'express';
import JwtProvider from './JwtProvider';
import User from '@/core/user/model/User';
import UserRepository from '@/core/user/service/UserRepository';

export default function UserMiddleware(repository: UserRepository) {
  return async (req: Request, resp: Response, next: NextFunction) => {
    const accessDenied = () => resp.status(403).send('Token inválido');

    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) return accessDenied();

    const jwtProvider = new JwtProvider(process.env.JWT_SECRET!);
    const tokenUser = jwtProvider.get(token) as User;

    const user = repository.findByEmail(tokenUser.email);
    if (!user) return accessDenied();

    (req as any).user = user;

    next();
  };
}
