import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  InputSignal,
  Signal,
  ViewChild,
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
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { State } from '@domain/feature/country/entities/state';
import { MatCard } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { AutocompleteComponent } from '@shared/components/graphical/structural/autocomplete.component';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { SelectRegionComponent } from '@shared/components/graphical/structural/select-region.component';
import { CountryTable } from '@domain/feature/country/entities/countryTable';

@Component({
  selector: 'app-state-detail-list',
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
    MatCard,
    MatPaginator,
    AutocompleteComponent,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatIcon,
    SelectRegionComponent,
  ],
  styles: `
    :host {
      mat-card {
        margin: 1rem 1rem;
      }

      th.mat-sort-header-sorted {
        color: black;
      }

      tr.mat-mdc-row:hover {
        cursor: pointer;
        background-color: rgba(255, 249, 240, 0.65);
      }

      .mat-background-primary {
        background-color: rgba(250, 212, 207, 0.7);
      }
    }
  `,
  template: `
    <mat-card>
      @if (vals() && headers()) {
        <table [dataSource]="dataSource()" class="mat-elevation-z8" mat-table matSort>
          <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by number">No.</th>
            <td mat-cell *matCellDef="let element">{{ element.id }}</td>
          </ng-container>

          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by name">Name</th>
            <td mat-cell *matCellDef="let element">{{ element.name }}</td>
          </ng-container>

          <ng-container matColumnDef="type">
            <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by weight">Type</th>
            <td mat-cell *matCellDef="let element">{{ element.type }}</td>
          </ng-container>

          <ng-container matColumnDef="latitude">
            <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by symbol">latitude</th>
            <td mat-cell *matCellDef="let element">{{ element.latitude }}</td>
          </ng-container>

          <ng-container matColumnDef="longitude">
            <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by symbol">longitude</th>
            <td mat-cell *matCellDef="let element">{{ element.longitude }}</td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="headers()" class="mat-background-primary"></tr>
          <tr mat-row *matRowDef="let row; columns: headers()" (click)="displayCities(row)"></tr>
        </table>
      }

      <mat-paginator
        [pageSizeOptions]="[10, 20, 30]"
        showFirstLastButtons
        aria-label="Select page of periodic elements"
      />
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateDetailListComponent {
  states: InputSignal<State[]> = input.required();
  headers: Signal<string[]> = computed(() => Object.keys(this.states()[0]).filter((e) => e !== 'cities'));
  vals = computed(() => this.states().map((state) => ({ ...state })));
  dataSource = computed(() => new MatTableDataSource(this.states()));

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    effect(() => {
      this.dataSource().sort = this.sort;
      this.dataSource().paginator = this.paginator;
    });
  }

  displayCities = (state: State) => {
    console.log(state.cities);
  };
}
