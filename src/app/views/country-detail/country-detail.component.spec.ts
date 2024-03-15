import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailComponent } from '@views/country-detail/country-detail.component';
import { MockProvider } from 'ng-mocks';
import {
  FindCountryDetailUsecase
} from '@domain/feature/country/usecases/find-country-detail/find-country-detail.usecase';

describe('CountryDetailComponent', () => {
  let fixture: ComponentFixture<CountryDetailComponent>;
  let component: CountryDetailComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetailComponent],
      providers: [MockProvider(FindCountryDetailUsecase)]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
