import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfunctionalComponent } from './rfunctional.component';

describe('RfunctionalComponent', () => {
  let component: RfunctionalComponent;
  let fixture: ComponentFixture<RfunctionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfunctionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
