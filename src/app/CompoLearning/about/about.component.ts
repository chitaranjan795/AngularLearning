import { Component } from '@angular/core';

import { AboutDescriptionComponent } from '../about-description/about-description.component';
import { AboutPortfolioComponent } from '../about-portfolio/about-portfolio.component';

@Component({
  selector: 'app-about',
  imports: [AboutDescriptionComponent, AboutPortfolioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
