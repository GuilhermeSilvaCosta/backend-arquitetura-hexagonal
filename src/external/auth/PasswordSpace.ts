import EncryptProvider from '@/core/user/service/EncryptProvider';

class PasswordSpace implements EncryptProvider {
  cripto(text: string): string {
    return text.split('').join(' ');
  }
}

export default new PasswordSpace();
