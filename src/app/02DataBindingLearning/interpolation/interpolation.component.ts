import { Component } from '@angular/core';

// This class is for pipe
import { CommonModule } from '@angular/common';

interface person {
  name: string;
  designation: string;
  salary: number;
}

@Component({
  selector: 'app-interpolation',
  imports: [CommonModule],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css',
})
export class InterpolationComponent {
  // variable as interpolation
  name: string = 'Chitaranjan';

  // object as interpolation
  person: person = {
    name: 'Madhab',
    designation: 'Developer',
    salary: 50000,
  };

  // Array as interpolation
  arr = ['Papu', 'Raju', 'Rockey', 'Shyam'];

  functionname(): string {
    return 'This is a function';
  }

  myName = 'alok nayak';
  mySalary = 80000;
  DateOfJoin = new Date();
}
