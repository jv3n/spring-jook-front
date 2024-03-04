import { CountryMapper } from '@adapters/country/mapper/country.mapper';
import { CountryTable } from '@domain/feature/country/entities/countryTable';
import { CountryTableDto } from '@adapters/data-transfert-object/model/country-table-dto';

describe(`CountryMapper`, () => {
  describe('toEntities', () => {
    it('should map for nominal case', () => {
      const expected: CountryTable[] = [
        {
          id: 1,
          name: 'United States',
          iso3: 'USA',
          numericCode: 840,
          capitalName: 'Washington, D.C.',
          currency: 'USD',
          region: 'Americas',
          subregion: 'North America',
          emoji: '🇺🇸',
        },
      ];

      const req: CountryTableDto[] = [
        {
          id: 1,
          name: 'United States',
          nativeName: 'United States',
          iso3: 'USA',
          iso2: 'US',
          numericCode: 840,
          phoneCode: '+1',
          capitalName: 'Washington, D.C.',
          currency: 'USD',
          currencyName: 'United States dollar',
          currencySymbol: '$',
          topLevelDomain: '.us',
          region: 'Americas',
          regionId: 19,
          subregion: 'North America',
          subregionId: 21,
          nationality: 'American',
          latitude: 38.9072,
          longitude: -77.0369,
          emoji: '🇺🇸',
          emojiu: 'U+1F1FA U+1F1F8',
        },
      ];

      expect(CountryMapper.toCountryTableEntities(req)).toEqual(expected);
    });
  });

  describe('toEntity', () => {
    it('should map for nominal case', () => {
      const expected: CountryTable = {
        id: 1,
        name: 'United States',
        nativeName: 'United States',
        iso3: 'USA',
        iso2: 'US',
        numericCode: 840,
        phoneCode: '+1',
        capitalName: 'Washington, D.C.',
        currency: 'USD',
        currencyName: 'United States dollar',
        currencySymbol: '$',
        topLevelDomain: '.us',
        region: 'Americas',
        regionId: 19,
        subregion: 'North America',
        subregionId: 21,
        nationality: 'American',
        latitude: 38.9072,
        longitude: -77.0369,
        emoji: '🇺🇸',
        emojiu: 'U+1F1FA U+1F1F8',
      };

      const req: CountryTableDto = {
        id: 1,
        name: 'United States',
        nativeName: 'United States',
        iso3: 'USA',
        iso2: 'US',
        numericCode: 840,
        phoneCode: '+1',
        capitalName: 'Washington, D.C.',
        currency: 'USD',
        currencyName: 'United States dollar',
        currencySymbol: '$',
        topLevelDomain: '.us',
        region: 'Americas',
        regionId: 19,
        subregion: 'North America',
        subregionId: 21,
        nationality: 'American',
        latitude: 38.9072,
        longitude: -77.0369,
        emoji: '🇺🇸',
        emojiu: 'U+1F1FA U+1F1F8',
      };

      expect(CountryMapper.toCountryTableEntity(req)).toEqual(expected);
    });
  });
});
