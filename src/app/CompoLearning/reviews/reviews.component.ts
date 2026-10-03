import { Component } from '@angular/core';

import { ReviewsCardComponent } from '../reviews-card/reviews-card.component';


@Component({
  selector: 'app-reviews',
  imports: [ReviewsCardComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {}
