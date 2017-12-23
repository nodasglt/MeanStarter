import { EnovCompComponent } from './enovcomp/enovcomp.component';
import { EuXcelComponent } from './euxcel/euxcel.component';
import { OtherComponent } from './other/other.component';
import { IdeaComponent } from './idea/idea.component';
import { TeeComponent } from './tee/tee.component';
import { YesComponent } from './yes/yes.component';
import { InnovationComponent } from './innovation.component';

export const routes = [
  { path: '', component: InnovationComponent, children: [
    { path: 'enovcomp', component: EnovCompComponent },
    { path: 'euxcel', component: EuXcelComponent },
    { path: 'other', component: OtherComponent },
    { path: 'idea', component: IdeaComponent },
    { path: 'tee', component: TeeComponent },
    { path: 'yes', component: YesComponent },
  ]},
];
