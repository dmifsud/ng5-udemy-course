import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAssignmentComponent } from './forms-assignment.component';

describe('FormsAssignmentComponent', () => {
  let component: FormsAssignmentComponent;
  let fixture: ComponentFixture<FormsAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
