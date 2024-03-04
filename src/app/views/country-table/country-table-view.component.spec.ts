import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockProvider } from 'ng-mocks';
import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';
import { AllCountriesComponent } from '@views/country/all-countries.component';

describe('AllCountriesComponent', () => {
  let fixture: ComponentFixture<AllCountriesComponent>;
  let component: AllCountriesComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AllCountriesComponent],
      providers: [MockProvider(FindAllCountriesUsecase)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCountriesComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
