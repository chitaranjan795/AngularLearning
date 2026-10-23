import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  // Login Form
  email = new FormControl('papu@gmail.com', [Validators.required, Validators.email]);

  password = new FormControl('123456789', [Validators.required, Validators.minLength(6)]);

  login() {
    if (this.email.invalid || this.password.invalid) {
      this.email.markAsTouched();
      this.password.markAsTouched();
      return;
    }

    console.log(this.email.value, this.password.value);
    this.reset();
  }

  reset() {
    this.email.reset('');
    this.password.reset('');
  }

  // Registration Form Group
  registrationForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(1)]),
    desc: new FormControl('', [Validators.required]),
  });

  register() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    console.log(this.registrationForm.value);
    console.log(this.registrationForm.value.title);
  }
}
