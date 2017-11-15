import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
    HttpClientModule,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import {
    NgModule,
    ApplicationRef
} from '@angular/core';
import {
    removeNgStyles,
    createNewHosts,
    createInputTransfer
} from '@angularclass/hmr';
import {
    RouterModule,
    PreloadAllModules
} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StorageServiceModule } from 'angular-webstorage-service';

import { FlexLayoutModule } from "@angular/flex-layout";

/*
* Platform and Environment providers/directives/pipes
*/
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';

import { MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
} from '@angular/material';

import { ParticlesModule } from 'angular-particle';

import { ProfileCardComponent, ProfileDialog } from './profile-card';
import { NavBarComponent } from './navbar';
import { LandingPageComponent } from './landing-page';
import { TeamComponent } from './team';
import { PublicationsComponent } from './publications';
import { ProjectsComponent, ProjectDialog } from './projects';
import { FooterBarComponent } from './footer-bar';
import { PhdsComponent, PhdsDialog } from './phds';
import { ResearchComponent } from './research';

import {
    AuthService,
    AuthInterceptor,
} from './core';

import {
    ProfileComponent,
} from './admin';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState,
    AuthService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    },
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
* `AppModule` is the main entry point into Angular2's bootstraping process
*/
@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ProfileCardComponent,
        NavBarComponent,
        LandingPageComponent,
        TeamComponent,
        ProfileDialog,
        PublicationsComponent,
        ProjectsComponent,
        ProjectDialog,
        PhdsComponent,
        PhdsDialog,
        ProfileComponent,
        FooterBarComponent,
        ResearchComponent,
        NoContentComponent,
        XLargeDirective,
    ],
    entryComponents: [
        ProfileDialog,
        ProjectDialog,
        PhdsDialog,
    ],
    /**
    * Import Angular's modules.
    */
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES, {
            useHash: Boolean(history.pushState) === false,
            preloadingStrategy: PreloadAllModules
        }),
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule,
        MatListModule,
        MatExpansionModule,
        MatMenuModule,
        ParticlesModule,
        FlexLayoutModule,
        StorageServiceModule,
    ],
    /**
    * Expose our Services and Providers into Angular's dependency injection.
    */
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {

    constructor(
        public appRef: ApplicationRef,
        public appState: AppState
    ) {}

    public hmrOnInit(store: StoreType) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        /**
        * Set state
        */
        this.appState._state = store.state;
        /**
        * Set input values
        */
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    public hmrOnDestroy(store: StoreType) {
        const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
        /**
        * Save state
        */
        const state = this.appState._state;
        store.state = state;
        /**
        * Recreate root elements
        */
        store.disposeOldHosts = createNewHosts(cmpLocation);
        /**
        * Save input values
        */
        store.restoreInputValues  = createInputTransfer();
        /**
        * Remove styles
        */
        removeNgStyles();
    }

    public hmrAfterDestroy(store: StoreType) {
        /**
        * Display new elements
        */
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}
