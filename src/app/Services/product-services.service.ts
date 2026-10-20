import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  prducts = [
    { id: 1, name: 'Mobile', price: 12000 },
    { id: 2, name: 'Laptop', price: 120000 },
    { id: 3, name: 'Chair', price: 5000 },
    { id: 4, name: 'Watch', price: 1500 },
  ];

  getProducts() {
    return this.prducts;
  }
}
