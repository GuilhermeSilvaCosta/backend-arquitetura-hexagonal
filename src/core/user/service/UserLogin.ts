import UseCase from '@/core/shared/UseCase';
import User from '../model/User';
import UserRepository from './UserRepository';
import Errors from '@/core/shared/Errors';
import EncryptProvider from './EncryptProvider';

type Input = { email: string; password: string };

export default class UserLogin implements UseCase<Input, User> {
  constructor(
    private repository: UserRepository,
    private encryptProvider: EncryptProvider,
  ) {}

  async execute(input: Input): Promise<User> {
    const userFound = await this.repository.findByEmail(input.email);

    if (!userFound) throw new Error(Errors.USER_NOT_EXISTS);

    const matchPassword = this.encryptProvider.compare(
      input.password,
      userFound.password!,
    );

    if (!matchPassword) throw new Error(Errors.INCORRECT_PASSWORD);

    return { ...userFound, password: undefined };
  }
}
