import { Component } from '@angular/core';

// ++++++++++++++++++++ 📙 CompoLearning Components Start ++++++++++++++++++++

import { NavigationComponent } from './01CompoLearning/navigation/navigation.component';
import { HeaderComponent } from './01CompoLearning/header/header.component';
import { ServicesComponent } from './01CompoLearning/services/services.component';
import { AboutComponent } from './01CompoLearning/about/about.component';
import { ReviewsComponent } from './01CompoLearning/reviews/reviews.component';
import { FooterComponent } from './01CompoLearning/footer/footer.component';

// ++++++++++++++++++++ 📙 CompoLearning Components End ++++++++++++++++++++

// ++++++++++++++++++++ 📙 DataBindingLearning Components Start ++++++++++++++++++++

// One Way Data Binding
// import { InterpolationComponent } from './02DataBindingLearning/interpolation/interpolation.component';

// ++++++++++++++++++++ 📙 DataBindingLearning Components End ++++++++++++++++++++

@Component({
  selector: 'app-rooted',
  standalone: true,
  //  ✅ CompoLearning component's Imports
  imports: [
    NavigationComponent,
    HeaderComponent,
    ServicesComponent,
    AboutComponent,
    ReviewsComponent,
    FooterComponent,
  ],

  /*
  imports: [
    // InterpolationComponent,
  ],
 */

  templateUrl: `./app.html`,
  styleUrl: `./app.css`,
})
export class App {}
