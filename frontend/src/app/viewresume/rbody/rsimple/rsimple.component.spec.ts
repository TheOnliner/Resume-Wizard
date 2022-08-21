import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsimpleComponent } from './rsimple.component';

describe('RsimpleComponent', () => {
  let component: RsimpleComponent;
  let fixture: ComponentFixture<RsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
