import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { toSignal } from '@angular/core/rxjs-interop';
import { Signal } from '@angular/core';
import { CountryMapper } from '@adapters/country/mapper/country.mapper';
import { Country } from '@domain/feature/country/entities/country';
import { CountryResponse } from '@adapters/data-transfert-object/model/country-response';

export class CountryApiRepository implements CountryRepository {
  constructor(private readonly httpClient: HttpClient) {}

  getCountries(): Signal<Country[] | undefined> {
    return toSignal(
      this.httpClient
        .get<CountryResponse[]>('api/countries')
        .pipe(map((dtos: CountryResponse[]) => CountryMapper.toEntities(dtos))),
    );
  }
}
