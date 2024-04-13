import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CountryTableComponent } from '@shared/components/graphical/country/country-table/country-table.component';
import { Router } from '@angular/router';
import { CountryTable } from '@domain/feature/country/entities/countryTable';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CountryTableComponent],
  selector: 'app-all-countries',
  standalone: true,
  template: ` <div><app-country-table (emitCountryDetail)="emitCountryDetail($event)" /></div> `,
})
export class CountryTableViewComponent {
  router = inject(Router);

  emitCountryDetail = (evt: CountryTable) => {
    void this.router.navigate(['country-detail', evt.iso3]);
  };
}
