import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSalesRchartComponent } from './product-sales-rchart.component';

describe('ProductSalesRchartComponent', () => {
  let component: ProductSalesRchartComponent;
  let fixture: ComponentFixture<ProductSalesRchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSalesRchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSalesRchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
