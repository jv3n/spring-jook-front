import { CountryTable } from '@domain/feature/country/entities/countryTable';
import { CountryTableDto } from '@adapters/data-transfert-object/model/country-table-dto';
import { CountryDetailDto } from '@adapters/data-transfert-object/model/country-detail-dto';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';
import { StateDto } from '@adapters/data-transfert-object/model/state-dto';
import { State } from '@domain/feature/country/entities/state';
import { CityDto } from '@adapters/data-transfert-object/model/city-dto';
import { City } from '@domain/feature/country/entities/city';

export class CountryMapper {
  static readonly toCountryTableEntity = (response: CountryTableDto): CountryTable => ({
    id: response.id,
    name: response.name,
    iso3: response.iso3,
    numericCode: response.numericCode,
    capitalName: response.capitalName,
    currency: response.currency,
    region: response.region,
    subregion: response.subregion,
    latitudeLongitude: response?.latitudeLongitude,
    emoji: response.emoji,
  });

  static readonly toCountryTableEntities = (dtos: CountryTableDto[]): CountryTable[] => {
    return dtos.map((dto) => CountryMapper.toCountryTableEntity(dto));
  };

  static readonly toCountryDetailEntity = (dto: CountryDetailDto): CountryDetail => ({
    country: dto.country,
    states: CountryMapper.toStateEntities(dto.states as unknown as StateDto[]),
  });

  static readonly toStateEntity = (dto: StateDto): State => ({
    id: dto.id,
    name: dto.name,
    type: dto.type,
    latitude: dto.latitude,
    longitude: dto.longitude,
    cities: CountryMapper.toCityEntities(<City[]>dto.cities),
  });

  static readonly toStateEntities = (dtos: StateDto[]): State[] => dtos.map((dto) => CountryMapper.toStateEntity(dto));

  static readonly toCityEntity = (dto: CityDto): City => ({
    id: dto.id,
    name: dto.name,
    latitude: dto.latitude,
    longitude: dto.longitude,
  });

  static readonly toCityEntities = (dtos: CityDto[]): City[] => dtos.map((dto) => CountryMapper.toCityEntity(dto));
}
