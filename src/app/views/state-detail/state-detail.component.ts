import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { FindCountryDetailUsecase } from '@domain/feature/country/usecases/find-country-detail/find-country-detail.usecase';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';
import { CountryDetailCardComponent } from '@views/country-detail/cmp/country-detail-card.component';
import { CountryDetailListComponent } from '@views/country-detail/cmp/country-detail-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { StateDetailCardComponent } from '@views/state-detail/cmp/state-detail-card.component';
import { StateDetailListComponent } from '@views/state-detail/cmp/state-detail-list.component';
import { State } from '@domain/feature/country/entities/state';
import { Router } from '@angular/router';

@Component({
  imports: [
    MatTabsModule,
    CountryDetailCardComponent,
    CountryDetailListComponent,
    StateDetailCardComponent,
    StateDetailListComponent,
  ],
  selector: 'app-state-detail',
  standalone: true,
  template: `
    <mat-tab-group>
      <mat-tab label="State">
        <!--        @if (countryDetail()?.country; as country) {-->
        <!--          <app-state-detail-card [country]="country" />-->
        <!--        }-->

        <!--        @if (countryDetail()?.states; as states) {-->
        <!--          <app-state-detail-list [states]="states" />-->
        <!--        }-->
      </mat-tab>
      <mat-tab label="Second"> Content 2</mat-tab>
    </mat-tab-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateDetailComponent {
  readonly router = inject(Router);
  state = input.required<State>();

  constructor() {
    effect(() => {
      console.log(this.state());
    });
  }
}
