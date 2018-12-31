import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAccordionFromObjectComponent } from './ngx-accordion-from-object.component';

describe('NgxAccordionFromObjectComponent', () => {
  let component: NgxAccordionFromObjectComponent;
  let fixture: ComponentFixture<NgxAccordionFromObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAccordionFromObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAccordionFromObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
