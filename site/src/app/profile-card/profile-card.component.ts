import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate,
  Inject,
} from '@angular/core';

import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material';

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

    toggleFlip() {
      this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }

    constructor(
        public dialog: MatDialog
    ) {}

    openDialog(): void {
        let dialogRef = this.dialog.open(ProfileDialog, {
          width: '90vw',
          data: {  }
        });
    }
}

@Component({
  selector: 'profile-dialog',
  templateUrl: 'profile-dialog.component.html',
})
export class ProfileDialog {

  constructor(
    public dialogRef: MatDialogRef<ProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
