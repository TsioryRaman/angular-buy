import { Injectable } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Array<Product> = [
    new Product(1, 'Nike', 'Une meilleure chaussure Nike', 3000, 4),
    new Product(2, 'Jordan', 'Une meilleure chaussure Jordan', 2000, 8),
    new Product(3, 'Air', 'Une meilleure chaussure Air', 1500, 99),
    new Product(4, 'Converse', 'Une meilleure chaussure converse', 32, 101),
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getSingleProduct(id:number): Product{
    return this.getProductById(id);
  }

  likedOrNot(id: number, clicked: boolean) {
    clicked ? this.getProductById(id).liked++ : this.getProductById(id).liked--;
  }

  private getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
