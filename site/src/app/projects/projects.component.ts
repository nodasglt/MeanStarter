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

import { BannerService } from '../banner';

import { ProjectsService, Project } from './projects.service';

@Component({
    selector: 'projects',
    styleUrls: ['../landing-page/landing-page.component.scss', 'projects.component.scss'],
    templateUrl: 'projects.component.html',
})
export class ProjectsComponent {
    constructor(
        public dialog: MatDialog,
        private bannerService: BannerService,
        public projectsService: ProjectsService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('Eltrun Projects');
        });
    }

    onClick(dialogData): void {
        let dialogRef = this.dialog.open(ProjectDialog, {
            data: dialogData,
        });
    }
}

@Component({
    selector: 'project-dialog',
    templateUrl: 'project-dialog.component.html',
    styleUrls: ['projects-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProjectDialog {

    constructor(
        public dialogRef: MatDialogRef<ProjectDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
