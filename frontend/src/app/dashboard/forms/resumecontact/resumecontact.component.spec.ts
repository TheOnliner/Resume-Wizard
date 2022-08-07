import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumecontactComponent } from './resumecontact.component';

describe('ResumecontactComponent', () => {
  let component: ResumecontactComponent;
  let fixture: ComponentFixture<ResumecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumecontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
