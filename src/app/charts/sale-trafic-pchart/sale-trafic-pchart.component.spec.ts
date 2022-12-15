import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTraficPchartComponent } from './sale-trafic-pchart.component';

describe('SaleTraficPchartComponent', () => {
  let component: SaleTraficPchartComponent;
  let fixture: ComponentFixture<SaleTraficPchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleTraficPchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleTraficPchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
