import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';
import { MockProvider } from 'ng-mocks';
import { CountryDetailCardComponent } from '@shared/components/graphical/country/country-detail-card/country-detail-card.component';

describe('CountryDetailCardComponent', () => {
  let component: CountryDetailCardComponent;
  let fixture: ComponentFixture<CountryDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CountryDetailCardComponent],
      providers: [MockProvider(FindAllCountriesUsecase)],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
