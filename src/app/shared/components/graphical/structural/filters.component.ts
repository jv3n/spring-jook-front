import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { AutocompleteComponent } from '@shared/components/graphical/structural/autocomplete.component';
import { CountryTable } from '@domain/feature/country/entities/countryTable';
import { MatIcon } from '@angular/material/icon';
import { SelectRegionComponent } from '@shared/components/graphical/structural/select-region.component';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatExpansionModule, AutocompleteComponent, MatIcon, SelectRegionComponent],
  styles: ``,
  template: `
    <mat-accordion>
      <mat-expansion-panel (opened)="panelOpenState = true" (closed)="panelOpenState = false">
        <mat-expansion-panel-header>
          <mat-panel-title>
            <mat-icon>filter_alt</mat-icon>
          </mat-panel-title>
        </mat-expansion-panel-header>

        <app-autocomplete [countries]="countries()" (selectedCountryEmitter)="emitSelectedCountry($event)" />

        <app-select-region [regions]="regions()" (selectedRegionsEmitter)="addRegionFilter($event)" />
      </mat-expansion-panel>
    </mat-accordion>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  panelOpenState = false;

  countries = input.required<CountryTable[]>();
  regions = computed(
    () =>
      this.countries()
        .map((country) => country.region)
        .filter((el, i, a) => i === a.indexOf(el)) as string[],
  );

  selectedByCountryName: CountryTable[] | null = null;
  selectedByRegion: CountryTable[] | null = null;
  selectedCountryEmitter = output<CountryTable[]>();

  emitSelectedCountry = (byCountryName: CountryTable[] | null) => {
    this.selectedByCountryName = byCountryName;
    this.computeFilters();
  };

  addRegionFilter = (selectedRegions: string[]) => {
    this.selectedByRegion = this.countries().filter((country) =>
      selectedRegions.find((region) => country.region === region),
    );
    this.computeFilters();
  };

  computeFilters = () => {
    if (!this.selectedByCountryName && !this.selectedByRegion) {
      this.selectedCountryEmitter.emit(this.countries());
      return;
    }

    if (this.selectedByCountryName && this.selectedByRegion) {
      this.selectedCountryEmitter.emit(
        this.selectedByRegion.filter((countryReg) =>
          this.selectedByCountryName!.find((countryName) => countryName.name === countryReg.name),
        ),
      );
      return;
    }

    if (this.selectedByCountryName && !this.selectedByRegion) {
      this.selectedCountryEmitter.emit(this.selectedByCountryName);
      return;
    }

    if (!this.selectedByCountryName && this.selectedByRegion) {
      this.selectedCountryEmitter.emit(this.selectedByRegion);
      return;
    }
  };
}
