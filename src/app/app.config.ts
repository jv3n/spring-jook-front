import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideStoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { appRoutes } from './app.routes';
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

      StoreDevtoolsModule.instrument(),
    ),

    provideHttpClient(withInterceptorsFromDi()),

    // Routing
    provideRouter(appRoutes, withComponentInputBinding(), withRouterConfig({ paramsInheritanceStrategy: 'always' })),
    provideStoreDevtools(),
  ],
};
