import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubtsviewComponent } from './doubtsview.component';

describe('DoubtsviewComponent', () => {
  let component: DoubtsviewComponent;
  let fixture: ComponentFixture<DoubtsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubtsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubtsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
