import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { appInitializerFactory } from '@core/technical/initializer/app-initializer.factory';
import { CountryCoreModule } from '@core/feature/country/country.core.module';
import { ApiUrlPrependHttpInterceptor } from '@core/technical/api-url-prepend/api-url-prepend.http-interceptor';

@NgModule({
  imports: [CountryCoreModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      deps: [PlatformLocation],
      useFactory: (platformLocation: PlatformLocation) => platformLocation.getBaseHrefFromDOM(),
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: ApiUrlPrependHttpInterceptor,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
    },
  ],
})
export class CoreModule {}
