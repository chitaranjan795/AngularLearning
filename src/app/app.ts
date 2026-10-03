import { Component } from '@angular/core';

// ++++++++++++++++++++ 📙 CompoLearning Components Start ++++++++++++++++++++
/* 
import { NavigationComponent } from './CompoLearning/navigation/navigation.component';
import { HeaderComponent } from './CompoLearning/header/header.component';
import { ServicesComponent } from './CompoLearning/services/services.component';
import { AboutComponent } from './CompoLearning/about/about.component';
import { ReviewsComponent } from './CompoLearning/reviews/reviews.component';
import { FooterComponent } from './CompoLearning/footer/footer.component';
 */
// ++++++++++++++++++++ 📙 CompoLearning Components End ++++++++++++++++++++


// ++++++++++++++++++++ 📙 DataBindingLearning Components Start ++++++++++++++++++++



// ++++++++++++++++++++ 📙 DataBindingLearning Components End ++++++++++++++++++++


@Component({
  selector: 'app-rooted',
  standalone: true,
  /* ✅ CompoLearning component's Imports
  imports: [
    NavigationComponent,
    HeaderComponent,
    ServicesComponent,
    AboutComponent,
    ReviewsComponent,
    FooterComponent,
  ],
  */
  templateUrl: `./app.html`,
})
export class App {}
