import { Component, inject, signal } from '@angular/core';

import { ProductServices } from '../Services/product-services.service';

@Component({
  selector: 'app-stage5',
  imports: [],
  templateUrl: './stage5.component.html',
  styleUrl: './stage5.component.css',
})
export class Stage5Component {
  productServices = inject(ProductServices);
  products = this.productServices.getProducts();

  productDetails = signal<{ id: number; name: string; price: number }[]>([]);

  showProducts() {
    this.productDetails.set(this.products);
  }
}
