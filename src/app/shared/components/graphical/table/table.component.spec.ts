import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Table } from '@shared/components/graphical/table/table.component';
import { FindAllCountriesUsecase } from '@domain/feature/country/usecases/find-all-countries/find-all-countries.usecase';
import { MockProvider } from 'ng-mocks';

describe('Table', () => {
  let component: Table;
  let fixture: ComponentFixture<Table>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table],
      providers: [MockProvider(FindAllCountriesUsecase)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
