import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = environment.api.productsUrl;

  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.productsUrl).pipe(
   // delay(2000),  <-- for simulating network delay
    catchError(this.handleError)
  );
}

  getProductById(id: number): Observable<Product> {
  return this.http.get<Product[]>(this.productsUrl).pipe(
    map(products => {
      const product = products.find(p => p.id === id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return product;
    }),
    catchError(this.handleError)
  );
}

  private handleError(error: any) {
    console.error('Error fetching product data:', error);

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else if (error instanceof Error) {
      // Custom thrown errors (like "Product not found")
      errorMessage = error.message;
    } else {
      // Server-side or response error
      errorMessage = `Server returned code ${error.status}, message: ${error.message}`;
    }

    return throwError(() => new Error(errorMessage));
  }
}
