import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryTableComponent } from '@shared/components/graphical/country/country-table/country-table.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CountryTableComponent],
  selector: 'app-country-detail',
  standalone: true,
  template: ` <div>DETAIL COUNTRY</div> `,
})
export class CountryDetailComponent {}
