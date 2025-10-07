import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.scss']
})
export class CataloguePageComponent implements OnInit {
  products: any[] = [];
  errorMessage: string | null = null;
  isLoading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err.message || 'Unable to load products.';
        this.isLoading = false;
      },
    });
  }
}
