import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Input,
  signal,
  Signal,
  WritableSignal
} from '@angular/core';
import { CountryTableComponent } from '@shared/components/graphical/country/country-table/country-table.component';
import {
  FindCountryDetailUsecase
} from '@domain/feature/country/usecases/find-country-detail/find-country-detail.usecase';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CountryTableComponent],
  selector: 'app-country-detail',
  standalone: true,
  template: `
    {{iso3}}
    @if (countryDetail(); as countryDetail) {
      <p>{{ countryDetail.name }}</p>
    }
  `
})
export class CountryDetailComponent {
  readonly findCountryDetailUsecase = inject(FindCountryDetailUsecase);

  @Input() iso3!: string;
  countryDetail: WritableSignal<CountryDetail | undefined> = signal(undefined);

  constructor() {
    effect(() => {
      this.findCountryDetailUsecase.execute(this.iso3)
        .subscribe(countryDetail => this.countryDetail.set(countryDetail));
    });
  }

}
