import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormheaderComponent } from './formheader.component';

describe('FormheaderComponent', () => {
  let component: FormheaderComponent;
  let fixture: ComponentFixture<FormheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
