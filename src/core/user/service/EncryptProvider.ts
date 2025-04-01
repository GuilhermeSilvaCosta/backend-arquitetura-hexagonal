// Na arquitetura hexagonal esta interface é um Porta!
// A porta faz parte do core da sua aplicação
export default interface EncryptProvider {
  cripto(text: string): string;
  compare(password: string, encryptedPassword: string): boolean;
}
