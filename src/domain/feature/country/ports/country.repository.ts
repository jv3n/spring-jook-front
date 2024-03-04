import { Signal } from '@angular/core';
import { CountryTable } from '@domain/feature/country/entities/countryTable';
import { CountryDetailDto } from '@adapters/data-transfert-object/model/country-detail-dto';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';
import { Observable } from 'rxjs';

export interface CountryRepository {
  getCountries(): Signal<CountryTable[] | undefined>;

  getCountryDetail(iso3: string): Observable<CountryDetail | undefined>;
}
