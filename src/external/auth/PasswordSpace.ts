import EncryptProvider from '@/core/user/service/EncryptProvider';

class PasswordSpace implements EncryptProvider {
  cripto(text: string): string {
    return text.split('').join(' ');
  }

  compare(password: string, encryptedPassword: string): boolean {
    return this.cripto(password) === encryptedPassword;
  }
}

export default new PasswordSpace();
