import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-catalog',
  imports: [CommonModule],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css',
})
export class ProductCatalogComponent {
  product = signal([
    {
      name: 'Aadidas',
      category: 'shoe',
      price: 3344,
      image: 'aadidas.webp',
      alt: 'Aadidas shoe',
    },

    {
      name: 'shreelathers shoe',
      category: 'shoe',
      price: 5344,
      image: 'shreelather.webp',
      alt: 'shreelathers shoe',
    },

    {
      name: 'Tshirt for men',
      category: 'shirt',
      price: 7844,
      image: 'tshirt.webp',
      alt: 'Tshirt for men',
    },

    {
      name: 'kurta for men',
      category: 'shirt',
      price: 9944,
      image: 'kurti.webp',
      alt: 'kurta for men',
    },

    {
      name: 'Denim for men',
      category: 'pant',
      price: 3944,
      image: 'denim.webp',
      alt: 'Denim for men',
    },

    {
      name: 'Formal pant for men',
      category: 'pant',
      price: 1344,
      image: 'Formal.webp',
      alt: 'Formal pant for men',
    },
  ]);

  filteredProduct = signal(this.product());
  $event: any;

  inputProducts(event: Event) {
    let inputValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.filteredProduct.set(
      this.product().filter(
        (item) =>
          item.name.toLowerCase().includes(inputValue) ||
          item.category.toLowerCase().includes(inputValue),
      ),
    );
  }
}
