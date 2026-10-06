import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  value = 0;
  message = '';

  count(action: string) {
    if (action == 'minus') {
      this.value > 0 ? this.value-- : this.message = "Can't be Down";
    } else {
      this.value++;
      this.message = ""
    }
  }

  color = 'black';
  changeTextColor() {
    this.color = 'red';
  }

  bodyColor: string = 'white';
  btnContent: string = 'Yellow';

  changeColor(): void {
    if (this.bodyColor === 'white') {
      this.bodyColor = 'yellow';
      this.btnContent = 'White';

      document.body.classList.add('yellow-theme');
      document.body.classList.remove('white-theme');
    } else {
      this.bodyColor = 'white';
      this.btnContent = 'Yellow';

      document.body.classList.add('white-theme');
      document.body.classList.remove('yellow-theme');
    }
  }
}
