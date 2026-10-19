import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  id = input.required<string>();
  name = input.required<string>();
  image = input.required<string>();
  alt = input.required<string>();
  price = input.required<number>();

  selectedProduct = output<{ name: string; price: number }>();

  addToCart() {
    this.selectedProduct.emit({
      name: this.name(),
      price: this.price(),
    });
  }
}
