import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  count = signal(1);

  doubleCount = computed(() => this.count() * 2);

  increament() {
    this.count.update((current) => current + 1);
    // this.count.set(25);
    console.log(this.count);
  }

  alphabet = signal(['A ', 'B ', 'Apple ', 'Ball ']);

  filterMethod = signal(this.alphabet());

  onlyA() {
    // ! use this if the value is constant
    this.filterMethod.set(this.alphabet().filter((item) => item.toLowerCase().includes('apple')));
  }

  input_field(event: Event) {
    // ! Or use this if the value will be change

    let typedValue = event.target as HTMLInputElement;

    this.filterMethod.update(() =>
      this.alphabet().filter((item) => item.toLowerCase().includes(typedValue.value)),
    );
  }
}
