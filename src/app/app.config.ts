import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      // Angular module
      BrowserModule,

      // Material
      BrowserAnimationsModule,

      // Core
      CoreModule,

      // // Store
      // StoreModule.forRoot(),
      // EffectsModule.forRoot(),
      // StoreDevtoolsModule.instrument(),
    ),

    provideHttpClient(withInterceptorsFromDi()),

    // Routing
    provideRouter(appRoutes, withComponentInputBinding(), withRouterConfig({ paramsInheritanceStrategy: 'always' })),
    provideStore(),
    provideEffects(),
    provideStoreDevtools(),
  ],
};
