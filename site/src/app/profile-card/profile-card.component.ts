import {
    Component,
    trigger,
    state,
    style,
    transition,
    animate,
    Inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';

import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material';

import { ActivatedRoute } from '@angular/router';

export interface UserProfile {
    img: string,
    name: string;
    title: string;
    phone: string;
    mail: string;
    address: string;
    bio: string;
    //TODO: Add social[]
}

@Component({
    selector: 'profile-card',
    styleUrls: ['profile-card.component.scss'],
    templateUrl: 'profile-card.component.html',
    animations: [
        trigger('flipState', [
            state('active', style({
                transform: 'rotateY(179deg)'
            })),
            //state('inactive', style({
            //    transform: 'rotateY(0)'
            //})),
            transition('active => *', animate('200ms ease-out')),
            transition('* => active', animate('200ms ease-in'))
        ])
    ]
})
export class ProfileCardComponent {

    @Input() profile: UserProfile;

    flip: string = 'inactive';

    toggleFlip(event$) {
        event$.stopPropagation();
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }

    constructor(
        public dialog: MatDialog
    ) { }

    openDialog(): void {
        let dialogRef = this.dialog.open(ProfileDialog, {
            data: this.profile,
        });
    }
}

@Component({
    selector: 'profile-dialog',
    templateUrl: 'profile-dialog.component.html',
    styles: ['.mat-dialog-container { max-width: 1400px; }'],
    encapsulation: ViewEncapsulation.None,
})
export class ProfileDialog {

    constructor(
        public dialogRef: MatDialogRef<ProfileDialog>,
        @Inject(MAT_DIALOG_DATA) public profile: UserProfile) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
