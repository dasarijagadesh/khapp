import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidversionComponent } from './paidversion.component';

describe('PaidversionComponent', () => {
  let component: PaidversionComponent;
  let fixture: ComponentFixture<PaidversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
