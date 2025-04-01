import UseCase from '@/core/shared/UseCase';
import Product from '../model/Product';

export default class GetProductById implements UseCase<string, Product> {
  async execute(id: string): Promise<Product> {
    return { id, name: 'Produto 1', price: 10.0 };
  }
}
