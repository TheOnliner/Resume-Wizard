import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytemplatesComponent } from './mytemplates.component';

describe('MytemplatesComponent', () => {
  let component: MytemplatesComponent;
  let fixture: ComponentFixture<MytemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
