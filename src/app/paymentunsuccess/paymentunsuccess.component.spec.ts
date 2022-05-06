import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentunsuccessComponent } from './paymentunsuccess.component';

describe('PaymentunsuccessComponent', () => {
  let component: PaymentunsuccessComponent;
  let fixture: ComponentFixture<PaymentunsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentunsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentunsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
