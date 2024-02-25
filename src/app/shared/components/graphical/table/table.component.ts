import { Component, inject } from '@angular/core';
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

  cols: string[] = ['id', 'name', 'shortIsoCode', 'longIsoCode', 'countryCode', 'phoneCode'];
  countries = this.service.execute();
}
