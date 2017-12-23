import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './research.routes';

import { EnovCompComponent } from './enovcomp/enovcomp.component';
import { EuXcelComponent } from './euxcel/euxcel.component';
import { OtherComponent } from './other/other.component';
import { IdeaComponent } from './idea/idea.component';
import { TeeComponent } from './tee/tee.component';
import { YesComponent } from './yes/yes.component';
import { InnovationComponent } from './innovation.component';

console.log('`Innovation` bundle loaded asynchronously');

@NgModule({
    declarations: [
        EnovCompComponent,
        EuXcelComponent,
        OtherComponent,
        IdeaComponent,
        TeeComponent,
        YesComponent,
        InnovationComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
})
export class InnovationModule {
}
