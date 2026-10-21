import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-forund',
  imports: [],
  templateUrl: './not-forund.component.html',
  styleUrl: './not-forund.component.css',
})
export class NotForundComponent {
  constructor(public routes: Router) {}

  goToHome() {
    this.routes.navigate(['/']);
  }
}
