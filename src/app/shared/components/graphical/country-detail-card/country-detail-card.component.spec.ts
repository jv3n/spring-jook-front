import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';
import { MockProvider } from 'ng-mocks';
import { CountryTableComponent } from '@shared/components/graphical/country/country-table/country-table.component';

describe('CountryTableComponent', () => {
  let component: CountryTableComponent;
  let fixture: ComponentFixture<CountryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryTableComponent],
      providers: [MockProvider(FindAllCountriesUsecase)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
