import { CountryMapper } from '@adapters/country/mapper/country.mapper';
import { Country } from '@domain/feature/country/entities/country';
import { CountryResponse } from '@adapters/data-transfert-object/model/country-response';

describe(`CountryMapper`, () => {
  describe('toEntities', () => {
    it('should map for nominal case', () => {
      const expected: Country[] = [
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

      const req: CountryResponse[] = [
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

      expect(CountryMapper.toEntities(req)).toEqual(expected);
    });
  });

  describe('toEntity', () => {
    it('should map for nominal case', () => {
      const expected: Country = {
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

      const req: CountryResponse = {
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

      expect(CountryMapper.toEntity(req)).toEqual(expected);
    });
  });
});
