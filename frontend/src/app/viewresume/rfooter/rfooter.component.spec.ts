import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfooterComponent } from './rfooter.component';

describe('RfooterComponent', () => {
  let component: RfooterComponent;
  let fixture: ComponentFixture<RfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
