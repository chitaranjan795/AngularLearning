import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// ++++++++++++++++++++ 📙 CompoLearning Components Start ++++++++++++++++++++

// import { NavigationComponent } from './01CompoLearning/navigation/navigation.component';
// import { HeaderComponent } from './01CompoLearning/header/header.component';
// import { ServicesComponent } from './01CompoLearning/services/services.component';
// import { AboutComponent } from './01CompoLearning/about/about.component';
// import { ReviewsComponent } from './01CompoLearning/reviews/reviews.component';
// import { FooterComponent } from './01CompoLearning/footer/footer.component';

// ++++++++++++++++++++ 📙 CompoLearning Components End ++++++++++++++++++++

// ++++++++++++++++++++ 📙 DataBindingLearning Components Start ++++++++++++++++++++

// One Way Data Binding
// import { InterpolationComponent } from './02DataBindingLearning/interpolation/interpolation.component';
// import { PropertyBindingComponent } from './02DataBindingLearning/property-binding/property-binding.component';
// import { EventBindingComponent } from './02DataBindingLearning/event-binding/event-binding.component';
// import { TipCalculatorComponent } from './02DataBindingLearning/Project/tip-calculator/tip-calculator.component';

// ++++++++++++++++++++ 📙 DataBindingLearning Components End ++++++++++++++++++++

// ++++++++++ 📙 stage2 Start++++++++++

// import { ProductCatalogComponent } from './stage2/product-catalog/product-catalog.component';
// import { SignalComponent } from './stage2/signal/signal.component';

// ++++++++++ 📙 stage2 End++++++++++

// ++++++++++ 📙 stage3 Start ++++++++++
// import { ToDoComponent } from './stage3/to-do/to-do.component';
// ++++++++++ 📙 stage3 End ++++++++++

// ++++++++++ 📙 stage4 Start ++++++++++
// import { ShoppingCartComponent } from './stage4/shopping-cart/shopping-cart.component';
// ++++++++++ 📙 stage4 End ++++++++++

// ++++++++++ 📙 stage5 Start ++++++++++
// import { Stage5Component } from './stage5/stage5.component';
// import { NoteApplicationComponent } from './stage5/note-application/note-application.component';
// ++++++++++ 📙 stage5 End ++++++++++

// ++++++++++ 📙 stage6 Start ++++++++++
import { RouterNavigationComponent } from './stage6/router-navigation/router-navigation.component';
// ++++++++++ 📙 stage6 End ++++++++++

@Component({
  selector: 'app-rooted',
  standalone: true,
  //  ✅ CompoLearning component's Imports
  /*  imports: [
    NavigationComponent,
    HeaderComponent,
    ServicesComponent,
    AboutComponent,
    ReviewsComponent,
    FooterComponent,
  ], */

  // imports: [
  // InterpolationComponent,
  // PropertyBindingComponent,
  // EventBindingComponent,
  // TipCalculatorComponent,
  // ],

  // * Stage2
  // imports: [
  // ProductCatalogComponent,
  // SignalComponent,
  // ],

  // * Stage3
  // imports: [ToDoComponent],

  // * Stage4
  // imports: [ShoppingCartComponent],

  // * Stage5
  // imports: [
  // Stage5Component,
  // NoteApplicationComponent
  // ],

  // * Stage6
  imports: [RouterOutlet, RouterNavigationComponent],

  templateUrl: `./app.html`,
  styleUrl: `./app.css`,
})
export class App {}
