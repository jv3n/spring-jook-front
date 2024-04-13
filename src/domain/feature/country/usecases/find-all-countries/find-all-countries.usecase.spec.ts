import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';
import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { of } from 'rxjs';

describe('FindAllCountriesUsecase', () => {
  it('Should retrieve countries', () => {
    const repository: CountryRepository = {
      getCountries: () => of([]),
    } as unknown as CountryRepository;

    const useCase = new FindAllCountriesUsecase(repository);

    useCase.execute().subscribe({
      next: (res) => expect(res).toStrictEqual([]),
    });
  });
});
