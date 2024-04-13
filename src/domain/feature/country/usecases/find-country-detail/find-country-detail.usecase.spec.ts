import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { FindCountryDetailUsecase } from '@domain/feature/country/usecases/find-country-detail/find-country-detail.usecase';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';
import { of } from 'rxjs';

describe('FindCountryDetailUsecase', () => {
  it('Should retrieve country detail', () => {
    const repository: CountryRepository = {
      getCountryDetail: () => of({} as CountryDetail),
    } as unknown as CountryRepository;
    const useCase = new FindCountryDetailUsecase(repository);

    useCase.execute('123').subscribe({
      next: (res) => expect(res).toStrictEqual({}),
    });
  });
});
