// Na arquitetura hexagonal esta interface é um Porta!
// A porta faz parte do dore da sua aplicação
export default interface EncryptProvider {
  cripto(text: string): string;
}
