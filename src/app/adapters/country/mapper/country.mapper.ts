import { CountryDTO } from '@adapters/data-transfert-object/model/country-dto';
import { Country } from '@domain/feature/country/entities/country';

export class CountryMapper {
  static readonly toEntity = (dto: CountryDTO): Country => ({
    id: dto.id,
    name: dto.name,
    longIsoCode: dto.longIsoCode,
    shortIsoCode: dto.shortIsoCode,
    countryCode: dto.countryCode,
    phoneCode: dto.phoneCode,
  });

  static readonly toEntities = (dtos: CountryDTO[]): Country[] => {
    return dtos.map((dto) => CountryMapper.toEntity(dto));
  };
}
