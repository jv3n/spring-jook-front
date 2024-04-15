import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { tap } from 'rxjs';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-select-region',
  standalone: true,
  imports: [FormsModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatSelectModule, ReactiveFormsModule],
  styles: `
    span.mat-mdc-select-min-line {
      display: none;
    }
  `,
  template: `
    <mat-chip-grid #chipGrid aria-label="regions">
      @for (region of selectedRegions.value; track region) {
        <div (click)="remove(region)">
          <mat-chip-row>
            {{ region }}
            <button matChipRemove [attr.aria-label]="'remove ' + region">
              <mat-icon>cancel</mat-icon>
            </button>
          </mat-chip-row>
        </div>
      }
      <input
        [matChipInputFor]="chipGrid"
        [matChipInputSeparatorKeyCodes]="[ENTER, COMMA]"
        [matChipInputAddOnBlur]="true"
      />
    </mat-chip-grid>

    <mat-form-field>
      <mat-label>Regions</mat-label>
      <mat-select [formControl]="selectedRegions" multiple>
        @for (region of regions(); track region) {
          <mat-option [value]="region">{{ region }}</mat-option>
        }
      </mat-select>
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRegionComponent {
  protected readonly ENTER = ENTER;
  protected readonly COMMA = COMMA;

  selectedRegions = new FormControl<string[]>([]);
  regions = input.required<string[]>();
  selectedRegionsEmitter = output<string[]>();

  constructor() {
    this.selectedRegions.valueChanges
      .pipe(
        tap((regions) => this.selectedRegionsEmitter.emit(regions && regions.length > 0 ? regions : this.regions())),
      )
      .subscribe();
  }

  remove(region: string): void {
    if (this.selectedRegions.value) {
      const index = this.selectedRegions.value.indexOf(region);

      if (index >= 0) {
        const arr = this.selectedRegions.value;
        arr?.splice(index, 1);
        this.selectedRegions.patchValue(arr);
      }
    }
  }
}
