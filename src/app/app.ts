import { Component } from '@angular/core';

// ++++++++++++++++++++ 📙 CompoLearning Components Start ++++++++++++++++++++
/* 
import { NavigationComponent } from './01CompoLearning/navigation/navigation.component';
import { HeaderComponent } from './01CompoLearning/header/header.component';
import { ServicesComponent } from './01CompoLearning/services/services.component';
import { AboutComponent } from './01CompoLearning/about/about.component';
import { ReviewsComponent } from './01CompoLearning/reviews/reviews.component';
import { FooterComponent } from './01CompoLearning/footer/footer.component';
 */
// ++++++++++++++++++++ 📙 CompoLearning Components End ++++++++++++++++++++

// ++++++++++++++++++++ 📙 DataBindingLearning Components Start ++++++++++++++++++++

// One Way Data Binding
// import { InterpolationComponent } from './02DataBindingLearning/interpolation/interpolation.component';
// import { PropertyBindingComponent } from './02DataBindingLearning/property-binding/property-binding.component';
// import { EventBindingComponent } from './02DataBindingLearning/event-binding/event-binding.component';
// import { EventBindingFormComponent } from './02DataBindingLearning/event-binding-form/event-binding-form.component';

// ++++++++++++++++++++ 📙 DataBindingLearning Components End ++++++++++++++++++++

// ++++++++++++++++++++ 📙 ParentChild Components Start ++++++++++++++++++++
import { ParentComponent } from './03ParentchildCommunication/parent/parent.component';
// ++++++++++++++++++++ 📙 ParentChild Components End ++++++++++++++++++++

// ++++++++++++++++++++ 📙 Router Components Start ++++++++++++++++++++

import { NavigationComponent } from './Routing/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';

// ++++++++++++++++++++ 📙 Router Components Start ++++++++++++++++++++

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
  /* 
  imports: [
    // InterpolationComponent,
    // PropertyBindingComponent,
    // EventBindingComponent,
    // EventBindingFormComponent,
  ],
 */

  // imports: [ParentComponent],

  imports: [RouterOutlet, NavigationComponent],

  templateUrl: `./app.html`,
  styleUrl: `./app.css`,
})
export class App {}
