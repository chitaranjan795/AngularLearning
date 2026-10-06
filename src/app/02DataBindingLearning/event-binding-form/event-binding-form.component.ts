import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-binding-form',
  imports: [FormsModule],
  templateUrl: './event-binding-form.component.html',
  styleUrl: './event-binding-form.component.css',
})

// We are learning here 2 way data binding concepts
export class EventBindingFormComponent {
  name = '';
}
