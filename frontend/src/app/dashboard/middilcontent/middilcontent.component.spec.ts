import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddilcontentComponent } from './middilcontent.component';

describe('MiddilcontentComponent', () => {
  let component: MiddilcontentComponent;
  let fixture: ComponentFixture<MiddilcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddilcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddilcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
