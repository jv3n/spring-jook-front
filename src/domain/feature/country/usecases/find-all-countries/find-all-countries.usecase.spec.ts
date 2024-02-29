import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';
import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { signal } from '@angular/core';

describe('FindAllCountriesUsecase', () => {
  it('Should retrieve countries', () => {
    const repository: CountryRepository = {
      getCountries: () => signal([]),
    } as unknown as CountryRepository;
    const useCase = new FindAllCountriesUsecase(repository);

    expect(useCase.execute()()).toStrictEqual([]);
  });
});
