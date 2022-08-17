import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbodyComponent } from './rbody.component';

describe('RbodyComponent', () => {
  let component: RbodyComponent;
  let fixture: ComponentFixture<RbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
