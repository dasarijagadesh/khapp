import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnameComponent } from './editname.component';

describe('EditnameComponent', () => {
  let component: EditnameComponent;
  let fixture: ComponentFixture<EditnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
