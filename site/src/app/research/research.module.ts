import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './research.routes';

import { ScoreComponent } from './score/score.component';
import { AdoptComponent } from './adopt/adopt.component';
import { EbiseComponent } from './ebise/ebise.component';
import { ImesComponent } from './imes/imes.component';
import { ImlComponent } from './iml/iml.component';
import { ResearchComponent } from './research.component';

console.log('`Research` bundle loaded asynchronously');

@NgModule({
    declarations: [
        ScoreComponent,
        AdoptComponent,
        EbiseComponent,
        ImesComponent,
        ImlComponent,
        ResearchComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
})
export class ResearchModule {
}
