import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tip-calculator',
  imports: [CommonModule],
  templateUrl: './tip-calculator.component.html',
  styleUrl: './tip-calculator.component.css',
})
export class TipCalculatorComponent {
  bill = 0;
  people = 1;
  waiter = 0;

  input_bill_func(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.bill = Math.max(0, Number(input.value) || 0);
  }

  input_Person_func(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.people = Math.max(1, Math.floor(Number(input.value) || 1));
  }

  input_waiter_percent_func(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.waiter = Math.max(0, Number(input.value) || 0);
  }

  get each(): number {
    return this.bill / this.people;
  }

  get price_of_each_person_including_waiter_tip(): number {
    return this.each * (1 + this.waiter / 100);
  }

  get total_price(): number {
    return this.bill * (1 + this.waiter / 100);
  }
}
