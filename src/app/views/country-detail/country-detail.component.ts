import { ChangeDetectionStrategy, Component, effect, inject, Input, signal, WritableSignal } from '@angular/core';
import { FindCountryDetailUsecase } from '@domain/feature/country/usecases/find-country-detail/find-country-detail.usecase';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';
import { CountryDetailCardComponent } from '@shared/components/graphical/country/country-detail-card/country-detail-card.component';
import { CountryDetailListComponent } from '@shared/components/graphical/country/country-detail-list/country-detail-list.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CountryDetailCardComponent, CountryDetailListComponent],
  selector: 'app-country-detail',
  standalone: true,
  template: `
    @if (countryDetail()?.country; as country) {
      <app-country-detail-card [country]="country" />
    }

    @if (countryDetail()?.states; as states) {
      <app-country-detail-list [states]="states" />
    }
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
