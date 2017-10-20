import {
  Component,
  trigger, state, style, transition, animate
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile-card',
  styleUrls: [ 'profile-card.component.scss' ],
  templateUrl: 'profile-card.component.html',
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('600ms ease-out')),
      transition('inactive => active', animate('600ms ease-in'))
    ])
  ]
})
export class ProfileCardComponent {

    flip: string = 'inactive';
    constructor() {}

    toggleFlip() {
      this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }

}
