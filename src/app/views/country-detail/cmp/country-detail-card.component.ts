import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { Country } from '@domain/feature/country/entities/country';
import { MatButton } from '@angular/material/button';
import { PrettyJsonPipe } from '@views/country-detail/pipes/pretty-json.pipe';
import { AutocompleteComponent } from '@shared/components/graphical/structural/autocomplete.component';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { SelectRegionComponent } from '@shared/components/graphical/structural/select-region.component';

@Component({
  selector: 'app-country-detail-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    MatButton,
    PrettyJsonPipe,
    AutocompleteComponent,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatIcon,
    SelectRegionComponent
  ],
  styles: `
    mat-card {
      margin: 1rem 1rem;
    }

    mat-card-header {
      div {
        width: -webkit-fill-available;
      }

      .emoji {
        font-size: 5rem;
      }
    }
  `,
  template: `
    <mat-card>
      @if (country(); as country) {
        <mat-accordion>
          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>
                <mat-icon>folder</mat-icon>
              </mat-panel-title>
            </mat-expansion-panel-header>
            
            <mat-card-header>
              <div>
                <mat-card-title>{{ country.name }}</mat-card-title>
                <mat-card-subtitle>{{ country.iso2 }} - {{ country.iso3 }}</mat-card-subtitle>
              </div>
              <span class="emoji">{{ country.emoji }}</span>
            </mat-card-header>

            <mat-card-content>
              <p>Capital: {{ country.capitalName }}</p>
              <p>Currency: {{ country.currency }}</p>
              <p>Currency Name: {{ country.currencyName }}</p>
              <p>Currency Symbol: {{ country.currencySymbol }}</p>
              <p>Native Name: {{ country.nativeName }}</p>
              <p>Region: {{ country.region }} (ID: {{ country.regionId }})</p>
              <p>Subregion: {{ country.subregion }} (ID: {{ country.subregionId }})</p>
              <p>Nationality: {{ country.nationality }}</p>
              <p>Latitude: {{ country.latitude }}</p>
              <p>Longitude: {{ country.longitude }}</p>

              @if (showMore) {
                <p>ID: {{ country.id }}</p>
                <p>Numeric Code: {{ country.numericCode }}</p>
                <p>Phone Code: {{ country.phoneCode }}</p>
                <p>TLD: {{ country.tld }}</p>
                <p>Emoji Unicode: {{ country.emojiU }}</p>
                <div>
                  Timezones:
                  <code>
                    <pre>{{ country.timezones | prettyprint }}</pre>
                  </code>
                </div>
              }
            </mat-card-content>

            <mat-card-actions>
              <button mat-button (click)="toggleMore()">{{ viewMoreButton }}</button>
            </mat-card-actions>
          

          </mat-expansion-panel>
        </mat-accordion>
      }
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryDetailCardComponent {
  country = input.required<Country>();

  showMore = false;
  viewMoreButton = 'View More';

  toggleMore() {
    this.showMore = !this.showMore;
    this.viewMoreButton = this.showMore ? 'View Less' : 'View More';
  }
}
