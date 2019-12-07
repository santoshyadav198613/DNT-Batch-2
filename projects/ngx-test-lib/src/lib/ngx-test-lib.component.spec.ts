import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTestLibComponent } from './ngx-test-lib.component';

describe('NgxTestLibComponent', () => {
  let component: NgxTestLibComponent;
  let fixture: ComponentFixture<NgxTestLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTestLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
