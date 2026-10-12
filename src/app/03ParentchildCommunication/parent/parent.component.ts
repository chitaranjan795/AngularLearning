import { Component } from '@angular/core';

import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  places = [
    {
      name: 'puri',
      description: 'Best Place to heal',
    },
    {
      name: 'darjeeling',
      description: 'Best Place to enjoy mountain views',
    },
    {
      name: 'manali',
      description: 'Best Place for adventure and snow',
    },
    {
      name: 'goa',
      description: 'Best Place to relax on beaches',
    },
    {
      name: 'jaipur',
      description: 'Best Place to explore royal heritage',
    },
    {
      name: 'varanasi',
      description: 'Best Place to find spiritual peace',
    },
    {
      name: 'munnar',
      description: 'Best Place to enjoy nature and tea gardens',
    },
  ];
}
