import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobeComponent } from '@shared/components/graphical/globe/globe.component';
import { CountryTableComponent } from '@shared/components/graphical/country/country-table/country-table.component';
import { GlobeCountryCommandInterface } from '@shared/components/graphical/globe/globe-country-command.interface';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GlobeComponent],
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <app-globe (onCountryEmitter)="navigateToCountryDetail($event)" />
    </div>
  `,
})
export class HomeComponent {
  readonly #router = inject(Router);

  navigateToCountryDetail(e: GlobeCountryCommandInterface) {
    void this.#router.navigate(['/countries', e.iso3]);
  }
}
