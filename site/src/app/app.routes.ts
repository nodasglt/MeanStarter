import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { TeamComponent } from './team'
import { PublicationsComponent } from './publications';
import { ProjectsComponent } from './projects';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: AboutComponent, data: { depth: 1 } },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team',  component: TeamComponent, data: { depth: 2 } },
  { path: 'publications',  component: PublicationsComponent, data: { depth: 3 } },
  { path: 'projects',  component: ProjectsComponent, data: { depth: 4 } },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
