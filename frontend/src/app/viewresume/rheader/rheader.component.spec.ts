import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheaderComponent } from './rheader.component';

describe('RheaderComponent', () => {
  let component: RheaderComponent;
  let fixture: ComponentFixture<RheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
