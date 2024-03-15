import { CountryTable } from '@domain/feature/country/entities/countryTable';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';
import { Observable } from 'rxjs';

export interface CountryRepository {
  getCountries(): Observable<CountryTable[]>;

  getCountryDetail(iso3: string): Observable<CountryDetail | undefined>;
}
