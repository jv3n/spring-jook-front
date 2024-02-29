import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatRow,
  MatTable,
} from '@angular/material/table';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-country-table',
  standalone: true,
  templateUrl: 'country-table.component.html',
  imports: [MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatRow, MatTable],
})
export class CountryTableComponent {
  readonly service = inject(FindAllCountriesUsecase);

  countries = this.service.execute();
  cols = computed(() => Object.keys(this.countries()![0]));

  constructor() {
    effect(() => {
      console.log('c: ', this.countries());
      console.log('cols: ', this.cols());
    });
  }
}
