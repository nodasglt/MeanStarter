import { GrekaComponent } from './greka/greka.component';
import { SurveysComponent } from './surveys/surveys.component';
import { TrainingComponent } from './training/training.component';
import { EcommerceComponent } from './ecommerce.component';

export const routes = [
  { path: '', component: EcommerceComponent, children: [
    { path: 'greka', component: GrekaComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'surveys', component: SurveysComponent },
  ]},
];
