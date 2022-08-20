import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintemplatesComponent } from './admintemplates.component';

describe('AdmintemplatesComponent', () => {
  let component: AdmintemplatesComponent;
  let fixture: ComponentFixture<AdmintemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
