import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmodernComponent } from './rmodern.component';

describe('RmodernComponent', () => {
  let component: RmodernComponent;
  let fixture: ComponentFixture<RmodernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmodernComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmodernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
