import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  placeholer_name = 'Name';
  placeholder_username = 'username';

  name(event: Event) {
    const change = event.target as HTMLInputElement;
    console.log(change.value);
  }

  username(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
