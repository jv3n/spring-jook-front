import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlobeComponent } from '@shared/components/graphical/globe/globe.component';
import { CountryTableComponent } from '@shared/components/graphical/country/country-table/country-table.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GlobeComponent],
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <app-globe />
    </div>
  `,
})
export class HomeComponent {}
