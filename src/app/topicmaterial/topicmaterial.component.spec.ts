import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicmaterialComponent } from './topicmaterial.component';

describe('TopicmaterialComponent', () => {
  let component: TopicmaterialComponent;
  let fixture: ComponentFixture<TopicmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
