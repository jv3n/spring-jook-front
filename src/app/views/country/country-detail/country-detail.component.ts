import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryTableComponent } from '@shared/components/graphical/country/country-table/country-table.component';
import { GlobeCountryCommandInterface } from '@shared/components/graphical/globe/globe-country-command.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CountryTableComponent],
  selector: 'app-country-detail',
  standalone: true,
  template: ` <div>DETAIL COUNTRY</div> `,
})
export class CountryDetailComponent {}
