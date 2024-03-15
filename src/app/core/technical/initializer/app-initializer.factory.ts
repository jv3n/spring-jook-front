import { inject } from '@angular/core';
import { CountriesStore } from '@domain/feature/country/store/countries.store';

export const appInitializerFactory = () => {
  const store = inject(CountriesStore);
  return store.loadCountries;
};
