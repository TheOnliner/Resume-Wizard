import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformsComponent } from './userforms.component';

describe('UserformsComponent', () => {
  let component: UserformsComponent;
  let fixture: ComponentFixture<UserformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
