import { ChangeDetectionStrategy, Component, computed, effect, inject, output, ViewChild } from '@angular/core';
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
  MatTableDataSource,
} from '@angular/material/table';
import { CountriesStore } from '@domain/feature/country/store/countries.store';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AutocompleteComponent } from '@shared/components/graphical/structural/autocomplete.component';
import { CountryTable } from '@domain/feature/country/entities/countryTable';
import { FiltersComponent } from '@shared/components/graphical/structural/filters.component';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [
    AutocompleteComponent,
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
    MatSort,
    MatSortHeader,
    MatPaginator,
    FiltersComponent,
  ],
  styles: `
    :host {
      margin: 1rem;

      th.mat-sort-header-sorted {
        color: black;
      }

      tr.mat-mdc-row:hover {
        cursor: pointer;
        background-color: rgba(255, 249, 240, 0.65);
      }

      .mat-background-primary {
        background-color: rgba(233, 207, 250, 0.7);
      }
    }
  `,
  template: `
    @if (store.countries() && store.headers()) {
      <app-filters [countries]="store.countries()" (selectedCountryEmitter)="selectCountry($event)" />

      <table [dataSource]="dataSource()" class="mat-elevation-z8" mat-table matSort>
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by id">Id</th>
          <td mat-cell *matCellDef="let cell">{{ cell.id }}</td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by name">Name</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.name }}</td>
        </ng-container>

        <ng-container matColumnDef="iso3">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by Iso3">Iso3</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.iso3 }}</td>
        </ng-container>

        <ng-container matColumnDef="numericCode">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by code">Code</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.numericCode }}</td>
        </ng-container>

        <ng-container matColumnDef="capitalName">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by capital">Capital</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.capitalName }}</td>
        </ng-container>

        <ng-container matColumnDef="currency">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by currency">Currency</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.currency }}</td>
        </ng-container>

        <ng-container matColumnDef="region">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by region">Region</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.region }}</td>
        </ng-container>

        <ng-container matColumnDef="subregion">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by subregion">SubRegion</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.subregion }}</td>
        </ng-container>

        <ng-container matColumnDef="latitudeLongitude">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by latitude">latitude</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.latitudeLongitude }}</td>
        </ng-container>

        <ng-container matColumnDef="emoji">
          <th mat-header-cell *matHeaderCellDef>Flag</th>
          <td mat-cell *matCellDef="let cell">{{ cell?.emoji }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="this.store.headers()" class="mat-background-primary"></tr>
        <tr mat-row *matRowDef="let row; columns: this.store.headers()" (click)="detail(row)"></tr>
      </table>

      <mat-paginator
        [pageSizeOptions]="[10, 20, 30]"
        showFirstLastButtons
        aria-label="Select page of periodic elements"
      />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryTableComponent {
  readonly store = inject(CountriesStore);

  dataSource = computed(() => new MatTableDataSource(this.store.countries()));
  emitCountryDetail = output<CountryTable>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    effect(() => {
      this.dataSource().sort = this.sort;
      this.dataSource().paginator = this.paginator;
    });
  }

  selectCountry = (countries: CountryTable[]) => {
    this.dataSource().data = countries;
  };

  detail = (val: CountryTable) => {
    this.emitCountryDetail.emit(val);
  };
}
