import { ScoreComponent } from './score/score.component';
import { AdoptComponent } from './adopt/adopt.component';
import { EbiseComponent } from './ebise/ebise.component';
import { ImesComponent } from './imes/imes.component';
import { ImlComponent } from './iml/iml.component';
import { ResearchComponent } from './research.component';

export const routes = [
  { path: '', component: ResearchComponent, children: [
    { path: 'score', component: ScoreComponent },
    { path: 'adopt', component: AdoptComponent },
    { path: 'ebise', component: EbiseComponent },
    { path: 'imes', component: ImesComponent },
    { path: 'iml', component: ImlComponent },
  ]},
];
