import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users = signal([
    {
      name: 'Radha',
      age: 16,
    },
    {
      name: 'krishna',
      age: 15,
    },
  ]);
}
