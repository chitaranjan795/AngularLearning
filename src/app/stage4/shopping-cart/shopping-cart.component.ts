import { Component, computed, signal } from '@angular/core';

import { ProductCardComponent } from '../product-card/product-card.component';

interface CartItem {
  name: string;
  price: number;
}

@Component({
  selector: 'app-shopping-cart',
  imports: [ProductCardComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  products = signal([
    {
      id: 'p1',
      name: 'Aadidas',
      category: 'shoe',
      price: 3344,
      image: 'aadidas.webp',
      alt: 'Aadidas shoe',
    },

    {
      id: 'p2',
      name: 'shreelathers shoe',
      category: 'shoe',
      price: 5344,
      image: 'shreelather.webp',
      alt: 'shreelathers shoe',
    },

    {
      id: 'p3',
      name: 'Tshirt for men',
      category: 'shirt',
      price: 7844,
      image: 'tshirt.webp',
      alt: 'Tshirt for men',
    },

    {
      id: 'p4',
      name: 'kurta for men',
      category: 'shirt',
      price: 9944,
      image: 'kurti.webp',
      alt: 'kurta for men',
    },

    {
      id: 'p5',
      name: 'Denim for men',
      category: 'pant',
      price: 3944,
      image: 'denim.webp',
      alt: 'Denim for men',
    },

    {
      id: 'p6',
      name: 'Formal pant for men',
      category: 'pant',
      price: 1344,
      image: 'Formal.webp',
      alt: 'Formal pant for men',
    },
  ]);

  // Stores selected cart items: [{ name: '...', price: 123 }, ...]
  selectedProducts = signal<CartItem[]>([]);

  // Automatically recalculates whenever selectedProducts updates
  totalPrice = computed(() => this.selectedProducts().reduce((sum, item) => sum + item.price, 0));

  // Called when child emits product details
  handleProductSelected(item: CartItem) {
    this.selectedProducts.update((current) => [...current, item]);
  }
}
