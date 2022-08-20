import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalresumeComponent } from './digitalresume.component';

describe('DigitalresumeComponent', () => {
  let component: DigitalresumeComponent;
  let fixture: ComponentFixture<DigitalresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalresumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
