import { Component, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(public route: ActivatedRoute) {}

  user = signal<Params>({});

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.user.set(params);
    });
  }
}
