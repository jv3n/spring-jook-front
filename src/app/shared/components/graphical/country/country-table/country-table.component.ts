import { ChangeDetectionStrategy, Component, effect, inject, OnInit, Signal } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { CountriesStore } from '@domain/feature/country/store/countries.store';

@Component({
  selector: 'app-country-table',
  standalone: true,
  template: `
    @if (this.store.countries() && this.store.headers()) {
      loading: {{ this.store.loading() }}
      <table mat-table [dataSource]="this.store.countries()" class="mat-elevation-z8">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let cell">{{ cell.id }}</td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.name }}</td>
        </ng-container>

        <ng-container matColumnDef="iso3">
          <th mat-header-cell *matHeaderCellDef>Iso3</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.iso3 }}</td>
        </ng-container>

        <ng-container matColumnDef="numericCode">
          <th mat-header-cell *matHeaderCellDef>Code</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.numericCode }}</td>
        </ng-container>

        <ng-container matColumnDef="capitalName">
          <th mat-header-cell *matHeaderCellDef>Capital</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.capitalName }}</td>
        </ng-container>

        <ng-container matColumnDef="currency">
          <th mat-header-cell *matHeaderCellDef>Currency</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.currency }}</td>
        </ng-container>

        <ng-container matColumnDef="region">
          <th mat-header-cell *matHeaderCellDef>Region</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.region }}</td>
        </ng-container>

        <ng-container matColumnDef="subregion">
          <th mat-header-cell *matHeaderCellDef>SubRegion</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.subregion }}</td>
        </ng-container>

        <ng-container matColumnDef="latitudeLongitude">
          <th mat-header-cell *matHeaderCellDef>latitude</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.latitudeLongitude }}</td>
        </ng-container>

        <ng-container matColumnDef="emoji">
          <th mat-header-cell *matHeaderCellDef>Flag</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.emoji }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="this.store.headers()"></tr>
        <tr mat-row *matRowDef="let row; columns: this.store.headers()"></tr>
      </table>
    }
  `,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryTableComponent {
  readonly store = inject(CountriesStore);
}
