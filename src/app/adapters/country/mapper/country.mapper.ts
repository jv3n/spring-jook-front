import { Country } from '@domain/feature/country/entities/country';
import { CountryResponse } from '@adapters/data-transfert-object/model/country-response';

export class CountryMapper {
  static readonly toEntity = (response: CountryResponse): Country => ({
    id: response.id,
    name: response.name,
    nativeName: response.nativeName,
    iso3: response.iso3,
    iso2: response.iso2,
    numericCode: response.numericCode,
    phoneCode: response.phoneCode,
    capitalName: response.capitalName,
    currency: response.currency,
    currencyName: response.currencyName,
    currencySymbol: response.currencySymbol,
    topLevelDomain: response.topLevelDomain,
    region: response.region,
    regionId: response.regionId,
    subregion: response.subregion,
    subregionId: response.subregionId,
    nationality: response.nationality,
    latitude: response.latitude,
    longitude: response.longitude,
    emoji: response.emoji,
    emojiu: response.emojiu,
  });

  static readonly toEntities = (dtos: CountryResponse[]): Country[] => {
    return dtos.map((dto) => CountryMapper.toEntity(dto));
  };
}
