import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css',
})
export class PropertyBindingComponent {
  image = 'KrishnaImage.png';
  alt = 'krishna image';
  isDisabled = false;
  name = 'Chitaranjan';
  title = 'Paragraph';
  imgWidth = 400;
  isVisible = false;
}
