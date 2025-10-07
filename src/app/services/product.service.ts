import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = environment.api.productsUrl;

  constructor(private http: HttpClient) {}
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Error fetching product data:', error);

    
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side or response error
      errorMessage = `Server returned code ${error.status}, message: ${error.message}`;
    }

    return throwError(() => errorMessage);
  }
}
