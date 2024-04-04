import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarreclComponent } from './agregarrecl.component';

describe('AgregarreclComponent', () => {
  let component: AgregarreclComponent;
  let fixture: ComponentFixture<AgregarreclComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarreclComponent]
    });
    fixture = TestBed.createComponent(AgregarreclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
