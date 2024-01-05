import { Injectable } from '@angular/core';
import { Product } from '../models/Product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  constructor(private http:HttpClient){}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/product")
  }

  getSingleProduct(id:number): Observable<Product>{
    return this.http.get<Product>(`http://localhost:8080/product/${id}`);
  }

  likedOrNot(id: number, clicked: boolean) {
    clicked ? this.getProductById(id).liked++ : this.getProductById(id).liked--;
  }

  addProduct(product: {name:string,description:string,price:number,liked?:number}): Observable<Product>{
    return this.http.post<Product>("http://localhost:8080/product",product)
  }

  private getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  public generateProductId():number{
    return this.products[this.products.length - 1].id + 1
  }
}
