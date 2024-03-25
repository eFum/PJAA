import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypesListComponent } from './user-types-list.component';

describe('UserTypesListComponent', () => {
  let component: UserTypesListComponent;
  let fixture: ComponentFixture<UserTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
