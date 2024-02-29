import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryTableComponent } from '@shared/components/graphical/country/country-table/country-table.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CountryTableComponent],
  selector: 'app-all-countries',
  standalone: true,
  template: ` 
    <div><app-country-table /></div> `,
})
export class AllCountriesComponent {}
