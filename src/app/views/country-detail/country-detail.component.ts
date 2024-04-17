import { ChangeDetectionStrategy, Component, effect, inject, Input, signal, WritableSignal } from '@angular/core';
import { FindCountryDetailUsecase } from '@domain/feature/country/usecases/find-country-detail/find-country-detail.usecase';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';
import { CountryDetailCardComponent } from '@views/country-detail/cmp/country-detail-card.component';
import { CountryDetailListComponent } from '@views/country-detail/cmp/country-detail-list.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTabsModule, CountryDetailCardComponent, CountryDetailListComponent],
  selector: 'app-country-detail',
  standalone: true,
  template: `
    <mat-tab-group>
      <mat-tab label="First">
        @if (countryDetail()?.country; as country) {
          <app-country-detail-card [country]="country" />
        }

        @if (countryDetail()?.states; as states) {
          <app-country-detail-list [states]="states" />
        }
      </mat-tab>
      <mat-tab label="Second"> Content 2</mat-tab>
    </mat-tab-group>
  `,
})
export class CountryDetailComponent {
  readonly findCountryDetailUsecase = inject(FindCountryDetailUsecase);

  @Input() iso3!: string;
  countryDetail: WritableSignal<CountryDetail | undefined> = signal(undefined);

  constructor() {
    effect(() => {
      this.findCountryDetailUsecase.execute(this.iso3).subscribe((countryDetail) => {
        this.countryDetail.set(countryDetail);
      });
    });
  }
}
