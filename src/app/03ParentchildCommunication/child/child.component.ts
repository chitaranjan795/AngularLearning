import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {

  place = input.required<{
    name: string;
    description: string;
  }>();
}
