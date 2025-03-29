import User from '../model/User';

export default interface UserRepository {
  insert(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
