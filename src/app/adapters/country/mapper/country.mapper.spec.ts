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
          iso3: 'USA',
          numericCode: 840,
          capitalName: 'Washington, D.C.',
          currency: 'USD',
          region: 'Americas',
          subregion: 'North America',
          emoji: '🇺🇸',
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
        iso3: 'USA',
        numericCode: 840,
        capitalName: 'Washington, D.C.',
        currency: 'USD',
        region: 'Americas',
        subregion: 'North America',
        emoji: '🇺🇸',
      };
      const req: CountryTableDto = {
        id: 1,
        name: 'United States',
        iso3: 'USA',
        numericCode: 840,
        capitalName: 'Washington, D.C.',
        currency: 'USD',
        region: 'Americas',
        subregion: 'North America',
        emoji: '🇺🇸',
      };

      expect(CountryMapper.toCountryTableEntity(req)).toEqual(expected);
    });
  });
});
