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
      <app-globe (onCountryEmitter)="fn($event)" />
    </div>
  `,
})
export class HomeComponent {
  readonly #router = inject(Router);

  fn(e: GlobeCountryCommandInterface) {
    console.log('home ISO: ', e);
    void this.#router.navigate(['/countries/', e.iso3]);
  }
}
