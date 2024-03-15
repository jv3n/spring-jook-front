import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { CountryTable } from '@domain/feature/country/entities/countryTable';
import { map, Observable } from 'rxjs';

export class FindAllCountriesUsecase {
  constructor(private readonly countryRepository: CountryRepository) {}

  execute(): Observable<CountryTable[]> {
    return this.countryRepository.getCountries().pipe(map((c) => c ?? []));
  }
}
