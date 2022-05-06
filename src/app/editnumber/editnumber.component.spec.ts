import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnumberComponent } from './editnumber.component';

describe('EditnumberComponent', () => {
  let component: EditnumberComponent;
  let fixture: ComponentFixture<EditnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
