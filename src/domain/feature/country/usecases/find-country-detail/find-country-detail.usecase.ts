import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';
import { Observable } from 'rxjs';

export class FindCountryDetailUsecase {
  constructor(private readonly countryRepository: CountryRepository) {}

  execute(iso3: string): Observable<CountryDetail | undefined> {
    return this.countryRepository.getCountryDetail(iso3);
  }
}
