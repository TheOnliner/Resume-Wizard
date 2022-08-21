import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpdfComponent } from './rpdf.component';

describe('RpdfComponent', () => {
  let component: RpdfComponent;
  let fixture: ComponentFixture<RpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
