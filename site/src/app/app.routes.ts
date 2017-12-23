import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { TeamComponent } from './team'
import { PublicationsComponent } from './publications';
import { ProjectsComponent } from './projects';
import { LandingPageComponent } from './landing-page';
import { PhdsComponent } from './phds';
import { SlideshowComponent } from './slideshow';

import { DataResolver } from './app.resolver';

import {
    ProfileComponent,
} from './admin';

export const ROUTES: Routes = [
    { path: '', component: LandingPageComponent, children: [
        { path: '', component: SlideshowComponent, data: { depth: 0 } },
        { path: 'about', component: AboutComponent, data: { depth: 1 } },
        { path: 'home',  component: HomeComponent },
        { path: 'team',  component: TeamComponent, data: { depth: 2 } },
        { path: 'publications',  component: PublicationsComponent, data: { depth: 3 } },
        { path: 'projects',  component: ProjectsComponent, data: { depth: 4 } },
        { path: 'phds',  component: PhdsComponent, data: { depth: 5 } },
        { path: 'research', loadChildren: './research#ResearchModule' },
        { path: 'innovation', loadChildren: './innovation#InnovationModule' },
        { path: 'ecommerce', loadChildren: './ecommerce#EcommerceModule' }
    ]},
    { path: 'profile', component: ProfileComponent, children: [
        { path: '', component: AboutComponent },
    ]},
    { path: '**',    component: NoContentComponent },
];
