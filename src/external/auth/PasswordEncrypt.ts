import bcrypt from 'bcrypt';

import EncryptProvider from '@/core/user/service/EncryptProvider';

class PasswordEncrypt implements EncryptProvider {
  cripto(text: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(text, salt);
  }

  compare(password: string, encryptedPassword: string): boolean {
    return bcrypt.compareSync(password, encryptedPassword);
  }
}

export default new PasswordEncrypt();
