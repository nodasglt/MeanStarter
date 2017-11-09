import {
    Component,
    Inject,
} from '@angular/core';

import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material';

@Component({
    selector: 'projects',
    styleUrls: ['../landing-page/landing-page.component.scss', 'projects.component.scss'],
    templateUrl: 'projects.component.html'
})
export class ProjectsComponent {
    constructor(
        public dialog: MatDialog
    ) {}

    onClick(): void {
        let dialogRef = this.dialog.open(ProjectDialog, {
            //width: '90vw',
            data: {  }
        });
    }
}

@Component({
    selector: 'project-dialog',
    templateUrl: 'project-dialog.component.html',
})
export class ProjectDialog {

    constructor(
        public dialogRef: MatDialogRef<ProjectDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

        onNoClick(): void {
            this.dialogRef.close();
        }
    }
