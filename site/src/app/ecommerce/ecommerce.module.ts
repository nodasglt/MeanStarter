import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './ecommerce.routes';

import { GrekaComponent } from './greka/greka.component';
import { SurveysComponent } from './surveys/surveys.component';
import { TrainingComponent } from './training/training.component';
import { EcommerceComponent } from './ecommerce.component';

console.log('`Ecommerce` bundle loaded asynchronously');

@NgModule({
    declarations: [
        GrekaComponent,
        SurveysComponent,
        TrainingComponent,
        EcommerceComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
})
export class EcommerceModule {
}
