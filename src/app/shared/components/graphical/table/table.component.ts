import { Component, computed, effect, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class Table {
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
