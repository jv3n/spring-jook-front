import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  InputSignal,
  Signal
} from '@angular/core';
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
  MatTable
} from '@angular/material/table';
import { MatSort, MatSortHeader, Sort } from '@angular/material/sort';
import { State } from '@domain/feature/country/entities/state';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatCard } from '@angular/material/card';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-country-detail-list',
  standalone: true,
  imports: [
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatSortHeader,
    MatHeaderRow,
    MatRow,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatCard
  ],
  styles: `
    mat-card {
      margin: 1rem 1rem;
    }
  `,
  template: `
    <mat-card>
    @if (vals() && headers()) {
      <table mat-table [dataSource]="vals()" matSort (matSortChange)="announceSortChange($event)"
             class="mat-elevation-z8">

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by number">No.</th>
          <td mat-cell *matCellDef="let element"> {{ element.id }}</td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by name">Name</th>
          <td mat-cell *matCellDef="let element"> {{ element.name }}</td>
        </ng-container>

        <ng-container matColumnDef="type">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by weight">Type</th>
          <td mat-cell *matCellDef="let element"> {{ element.type }}</td>
        </ng-container>

        <ng-container matColumnDef="latitude">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by symbol">latitude</th>
          <td mat-cell *matCellDef="let element"> {{ element.latitude }}</td>
        </ng-container>

        <ng-container matColumnDef="longitude">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by symbol">longitude</th>
          <td mat-cell *matCellDef="let element"> {{ element.longitude }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="headers()"></tr>
        <tr mat-row *matRowDef="let row; columns: headers()"></tr>
      </table>
    }
    </mat-card>
  `
})
export class CountryDetailListComponent {
  private readonly _liveAnnouncer = inject(LiveAnnouncer);

  //@ViewChild(MatSort) sort: MatSort;

  states: InputSignal<State[]> = input.required();
  headers: Signal<string[]> = computed(() => Object.keys(this.states()[0]).filter(e => e !== 'cities'));
  vals = computed(() => this.states()
    .map(state => ({
        id: state.id,
        name: state.name,
        type: state.type,
        latitude: state.latitude,
        longitude: state.longitude
      })
    ));

  constructor() {
    effect(() => console.log(this.states))
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
