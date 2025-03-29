import User from '@/core/user/model/User';
import db from './db';

class UserRepositoryPg {
  async insert(user: User) {
    await db.query(
      `
        insert into users
        (id, name, email, password)
        values($1, $2, $3, $4)
    `,
      [user.id, user.name, user.email, user.password],
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    return db.oneOrNone(
      `
        select * from users where email = $1
    `,
      [email],
    );
  }
}

export default new UserRepositoryPg();
