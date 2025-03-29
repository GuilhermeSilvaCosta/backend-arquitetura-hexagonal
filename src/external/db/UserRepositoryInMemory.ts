import User from '../../core/user/model/User';

class UserRepositoryInMemory {
  private static readonly items: User[] = [];

  async insert(user: User) {
    const found = await this.findByEmail(user.email);
    if (found) return;
    UserRepositoryInMemory.items.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return UserRepositoryInMemory.items.find((u) => u.email === email) ?? null;
  }
}

export default new UserRepositoryInMemory();
