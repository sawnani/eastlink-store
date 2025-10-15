import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    CatalogueComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule, 
    CatalogueRoutingModule,
    FormsModule
  ]
})
export class CatalogueModule { }
