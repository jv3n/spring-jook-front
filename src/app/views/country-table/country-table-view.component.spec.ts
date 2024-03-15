import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';
import { CountryTableViewComponent } from '@views/country-table/country-table-view.component';

describe('AllCountriesComponent', () => {
  let fixture: ComponentFixture<CountryTableViewComponent>;
  let component: CountryTableViewComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryTableViewComponent],
      providers: [MockProvider(FindAllCountriesUsecase)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTableViewComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
