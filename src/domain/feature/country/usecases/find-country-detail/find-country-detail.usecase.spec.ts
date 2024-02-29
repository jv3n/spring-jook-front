import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { signal } from '@angular/core';
import {
  FindCountryDetailUsecase
} from '@domain/feature/country/usecases/find-country-detail/find-country-detail.usecase';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';

describe('FindCountryDetailUsecase', () => {
  it('Should retrieve country detail', () => {
    const repository: CountryRepository = {
      getCountryDetail: () => signal({} as CountryDetail)
    } as unknown as CountryRepository;
    const useCase = new FindCountryDetailUsecase(repository);

    expect(useCase.execute()()).toStrictEqual({});
  });
});
