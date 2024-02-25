import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { CountryApiRepository } from '@adapters/country/country.api.repository';
import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';

export const ICountryRepository = new InjectionToken<CountryRepository>('CountryRepository');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: ICountryRepository,
      deps: [HttpClient],
      useFactory: (httpClient: HttpClient) => {
        return new CountryApiRepository(httpClient);
      },
    },
    {
      provide: FindAllCountriesUsecase,
      useFactory: (countryRepository: CountryRepository) => new FindAllCountriesUsecase(countryRepository),
      deps: [ICountryRepository],
    },
  ],
})
export class CountryCoreModule {}
