import bcrypt from 'bcrypt';

import EncryptProvider from '@/core/user/service/EncryptProvider';

class PasswordEncrypt implements EncryptProvider {
  cripto(text: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(text, salt);
  }
}

export default new PasswordEncrypt();
