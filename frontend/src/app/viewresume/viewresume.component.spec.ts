import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewresumeComponent } from './viewresume.component';

describe('ViewresumeComponent', () => {
  let component: ViewresumeComponent;
  let fixture: ComponentFixture<ViewresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewresumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
