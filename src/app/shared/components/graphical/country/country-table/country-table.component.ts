import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, Signal } from '@angular/core';
import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { CountryTable } from '@domain/feature/country/entities/countryTable';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-country-table',
  standalone: true,
  templateUrl: 'country-table.component.html',
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
  ],
})
export class CountryTableComponent {
  readonly service = inject(FindAllCountriesUsecase);

  countries: Signal<CountryTable[] | undefined>;
  headers!: Signal<string[]>;

  constructor() {
    this.countries = this.service.execute();

    effect(() => {
      if (this.countries()) {
        this.headers = computed(() => Object.keys(this.countries()![0]));
      }
    });
  }
}
