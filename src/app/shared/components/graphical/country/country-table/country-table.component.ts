import { ChangeDetectionStrategy, Component, computed, effect, inject, OnInit, Signal, ViewChild } from '@angular/core';
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
  MatTable, MatTableDataSource
} from '@angular/material/table';
import { CountriesStore } from '@domain/feature/country/store/countries.store';
import { MatSort, MatSortHeader, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-country-table',
  standalone: true,
  styles: `
    th.mat-sort-header-sorted {
      color: black;
    }`,
  template: `
    @if (this.store.countries() && this.store.headers()) {
      <table
        (matSortChange)="announceSortChange($event)"
        [dataSource]="dataSource()"
        class="mat-elevation-z8"
        mat-table
        matSort
      >
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

        <tr mat-header-row *matHeaderRowDef="this.store.headers()"></tr>
        <tr mat-row *matRowDef="let row; columns: this.store.headers()"></tr>
      </table>

      <mat-paginator [pageSizeOptions]="[5, 10, 20]"
                     showFirstLastButtons
                     aria-label="Select page of periodic elements">
      </mat-paginator>
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
    MatSort,
    MatSortHeader,
    MatPaginator
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryTableComponent {
  private readonly _liveAnnouncer = inject(LiveAnnouncer);

  readonly store = inject(CountriesStore);

  dataSource = computed(() => new MatTableDataSource(this.store.countries()));

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    effect(() => {
      this.dataSource().sort = this.sort
      this.dataSource().paginator = this.paginator;
    });
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
