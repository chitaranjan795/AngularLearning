import { Component } from '@angular/core';

import { ServicesCardComponent } from './../services-card/services-card.component';

@Component({
  selector: 'app-services',
  imports: [ServicesCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = [1, 2, 3, 4, 5];
}
