import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  id = input.required<number>();
  title = input.required<string>();

  deleteItem = output<number>();

  deleteUser() {
    this.deleteItem.emit(this.id());
  }
}
