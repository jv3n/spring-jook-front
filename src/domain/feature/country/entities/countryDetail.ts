import { Region } from '@domain/feature/country/entities/region';
import { SubRegion } from '@domain/feature/country/entities/subRegion';

export interface CountryDetail {
  id?: number;
  name?: string;
  nativeName?: string;
  iso3?: string;
  iso2?: string;
  numericCode?: number;
  phoneCode?: string;
  capitalName?: string;
  currency?: string;
  currencyName?: string;
  currencySymbol?: string;
  topLevelDomain?: string;
  region?: Region;
  subregion?: SubRegion;
  nationality?: string;
  latitude?: number;
  longitude?: number;
  emoji?: string;
  emojiu?: string;
}
