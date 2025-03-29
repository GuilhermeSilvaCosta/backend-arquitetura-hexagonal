import UseCase from '@/core/shared/UseCase';
import User from '../model/User';
import Errors from '@/core/shared/Errors';
import Id from '@/core/shared/Id';
import CriptoProvider from './EncryptProvider';
import UserRepository from './UserRepository';

export default class UserRegister implements UseCase<User, void> {
  constructor(
    private repository: UserRepository,
    private criptoProvider: CriptoProvider,
  ) {}

  async execute(user: User): Promise<void> {
    const passwordEncrypt = this.criptoProvider.cripto(user.password);

    const found = await this.repository.findByEmail(user.email);
    if (found) throw new Error(Errors.USER_ALREADY_EXISTS);

    const newUser: User = {
      ...user,
      password: passwordEncrypt,
      id: Id.buildHash(),
    };
    console.log(`\n${JSON.stringify(newUser)}`);

    await this.repository.insert(newUser);
  }
}
