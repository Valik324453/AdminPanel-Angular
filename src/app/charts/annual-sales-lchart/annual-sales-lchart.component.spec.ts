import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSalesLchartComponent } from './annual-sales-lchart.component';

describe('AnnualSalesLchartComponent', () => {
  let component: AnnualSalesLchartComponent;
  let fixture: ComponentFixture<AnnualSalesLchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualSalesLchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualSalesLchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
