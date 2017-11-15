import {
    Component,
    Inject,
    ViewEncapsulation,
} from '@angular/core';

import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material';

@Component({
    selector: 'phds',
    styleUrls: ['../landing-page/landing-page.component.scss', 'phds.component.scss'],
    templateUrl: 'phds.component.html',
})
export class PhdsComponent {
    constructor(
        public dialog: MatDialog
    ) {}

    onClick(): void {
        console.log(window.innerHeight);
        let dialogRef = this.dialog.open(PhdsDialog, {
            data: {  }
        });
    }
}

@Component({
    selector: 'phds-dialog',
    templateUrl: 'phds-dialog.component.html',
    styleUrls: ['phds-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PhdsDialog {

    constructor(
        public dialogRef: MatDialogRef<PhdsDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

        onNoClick(): void {
            this.dialogRef.close();
        }
    }
