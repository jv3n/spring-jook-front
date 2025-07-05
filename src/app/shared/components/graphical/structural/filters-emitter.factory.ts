import { CountryTable } from '@domain/feature/country/entities/countryTable';

export const FiltersEmitterFactory = () => ({
  apply: (byName: CountryTable[] | null, byRegion: CountryTable[] | null): CountryTable[] | null => {
    if (!byName && !byRegion) {
      return null;
    }

    if (byName && byRegion) {
      return byRegion.filter((byRegion) => byName.find((byName) => byName.name === byRegion.name));
    }

    if (byName && !byRegion) {
      return byName;
    }

    return byRegion;
  },
});
