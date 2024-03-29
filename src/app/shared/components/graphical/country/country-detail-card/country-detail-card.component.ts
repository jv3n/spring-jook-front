import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
import { PrettyJsonPipe } from '@shared/components/graphical/country/country-detail-card/pretty-json.pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    </mat-card>
  `,
})
export class CountryDetailCardComponent {
  @Input() country!: Country;

  showMore = false;
  viewMoreButton = 'View More';

  toggleMore() {
    this.showMore = !this.showMore;
    this.viewMoreButton = this.showMore ? 'View Less' : 'View More';
  }
}
