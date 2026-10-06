import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
})
export class PropertyBindingComponent {
  name = 'Chitaranjan';
  desktopImg = 'Desktop.jpg';

  // Strings bound to attributes/properties
  initialUsername = 'Chitaranjan';
  emailPlaceholder = 'Enter your work email';

  // Booleans controlling UI accessibility
  isFormSubmitting = true;
  isAccountActive = true;
  allowEmailNotifications = true;

  textColor = "red";
  
}
