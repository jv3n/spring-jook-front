import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CountryTable } from '@domain/feature/country/entities/countryTable';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, AsyncPipe],
  styles: `
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }

    .example-full-width {
      width: 100%;
    }
  `,
  template: `
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <mat-label>Search by Name</mat-label>

        <input type="text" matInput [formControl]="selectedCountry" [matAutocomplete]="auto" />
        <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
          @for (country of filteredCountries$ | async; track country) {
            <mat-option [value]="country">{{ country.name }}</mat-option>
          }
        </mat-autocomplete>
      </mat-form-field>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent {
  selectedCountry = new FormControl<string | CountryTable>('');
  countries = input.required<CountryTable[]>();
  filteredCountries$!: Observable<CountryTable[]>;

  selectedCountryEmitter = output<CountryTable[] | null>();

  constructor() {
    this.filteredCountries$ = this.selectedCountry.valueChanges.pipe(
      startWith(''),
      map((countryName) => {
        const countries: CountryTable[] = countryName ? this._filter(countryName) : this.countries().slice();
        this.selectedCountryEmitter.emit(countryName ? countries : null);
        return countries;
      }),
    );
  }

  displayFn(countryTable: CountryTable): string {
    return countryTable.name ? countryTable.name : '';
  }

  _filter = (ctrl: string | CountryTable) => {
    const name = typeof ctrl === 'string' ? ctrl.toLowerCase() : (ctrl.name ?? '').toLowerCase();
    return (this.countries() || []).filter((country) => country.name?.toLowerCase().includes(name));
  };
}
