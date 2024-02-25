import { CountryDTO } from '@adapters/data-transfert-object/model/country-dto';
import { CountryMapper } from '@adapters/country/mapper/country.mapper';
import { Country } from '@domain/feature/country/entities/country';

describe(`CountryMapper`, () => {
  describe('toEntities', () => {
    it('should map for nominal case', () => {
      const expected: Country[] = [
        {
          id: 1,
          name: 'name',
          longIsoCode: 'longIsoCode',
          shortIsoCode: 'shortIsoCode',
          countryCode: 11,
          phoneCode: 12,
        },
      ];

      const req: CountryDTO[] = [
        {
          id: 1,
          name: 'name',
          longIsoCode: 'longIsoCode',
          shortIsoCode: 'shortIsoCode',
          countryCode: 11,
          phoneCode: 12,
        },
      ];

      expect(CountryMapper.toEntities(req)).toEqual(expected);
    });
  });

  describe('toEntity', () => {
    it('should map for nominal case', () => {
      const expected: Country = {
        id: 1,
        name: 'name',
        longIsoCode: 'longIsoCode',
        shortIsoCode: 'shortIsoCode',
        countryCode: 11,
        phoneCode: 12,
      };

      const req: CountryDTO = {
        id: 1,
        name: 'name',
        longIsoCode: 'longIsoCode',
        shortIsoCode: 'shortIsoCode',
        countryCode: 11,
        phoneCode: 12,
      };

      expect(CountryMapper.toEntity(req)).toEqual(expected);
    });
  });
});
