import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSessionsBchartComponent } from './store-sessions-bchart.component';

describe('StoreSessionsBchartComponent', () => {
  let component: StoreSessionsBchartComponent;
  let fixture: ComponentFixture<StoreSessionsBchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSessionsBchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSessionsBchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
