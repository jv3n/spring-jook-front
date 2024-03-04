import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { toSignal } from '@angular/core/rxjs-interop';
import { Signal } from '@angular/core';
import { CountryMapper } from '@adapters/country/mapper/country.mapper';
import { CountryTable } from '@domain/feature/country/entities/countryTable';
import { CountryTableDto } from '@adapters/data-transfert-object/model/country-table-dto';
import { CountryDetailDto } from '@adapters/data-transfert-object/model/country-detail-dto';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';

export class CountryApiRepository implements CountryRepository {
  constructor(private readonly httpClient: HttpClient) {
  }

  getCountries(): Signal<CountryTable[] | undefined> {
    return toSignal(
      this.httpClient
        .get<CountryTableDto[]>('api/country-table')
        .pipe(map((dtos: CountryTableDto[]) => CountryMapper.toCountryTableEntities(dtos)))
    );
  }

  getCountryDetail(iso3: string): Observable<CountryDetail | undefined> {
    return this.httpClient
      .get<CountryDetailDto>(`api/country-detail/${iso3}`)
      .pipe(map((dto: CountryDetailDto) => CountryMapper.toCountryDetailEntity(dto))
      );
  }
}
