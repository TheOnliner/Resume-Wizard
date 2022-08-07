import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatemodelComponent } from './templatemodel.component';

describe('TemplatemodelComponent', () => {
  let component: TemplatemodelComponent;
  let fixture: ComponentFixture<TemplatemodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatemodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
