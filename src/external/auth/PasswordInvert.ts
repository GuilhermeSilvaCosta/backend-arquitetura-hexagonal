import EncryptProvider from '@/core/user/service/EncryptProvider';

// Na arquitetura hexagonal, esta classe é um Adaptador!
// O adaptador não faz parte do core da aplicação
class InvertPassword implements EncryptProvider {
  cripto(password: string): string {
    return password.split('').reverse().join('');
  }
}

export default new InvertPassword();
