import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';
import { CountryTable } from '@domain/feature/country/entities/countryTable';

type CountryState = {
  countries: CountryTable[];
  loading: boolean;
};

const initialState: CountryState = {
  countries: [],
  loading: false,
};

export const CountriesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ countries }) => ({
    headers: computed(() => Object.keys(countries()[0])),
  })),
  withMethods((store, findAllCountriesUsecase = inject(FindAllCountriesUsecase)) => ({
    loadCountries: rxMethod<string>(
      pipe(
        distinctUntilChanged(),
        tap(() => patchState(store, { loading: true })),
        switchMap(() => {
          return findAllCountriesUsecase.execute().pipe(
            tap({
              next: (countries: CountryTable[]) => patchState(store, { countries: countries }),
              error: (err) => console.error(err),
              finalize: () => patchState(store, { loading: false }),
            }),
          );
        }),
      ),
    ),
  })),
);
