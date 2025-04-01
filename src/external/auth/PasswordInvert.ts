import EncryptProvider from '@/core/user/service/EncryptProvider';

// Na arquitetura hexagonal, esta classe é um Adaptador!
// O adaptador não faz parte do core da aplicação
class InvertPassword implements EncryptProvider {
  cripto(password: string): string {
    return password.split('').reverse().join('');
  }

  compare(password: string, encryptedPassword: string): boolean {
    return this.cripto(password) === encryptedPassword;
  }
}

export default new InvertPassword();
