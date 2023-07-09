import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctComponent } from './doct.component';

describe('DoctComponent', () => {
  let component: DoctComponent;
  let fixture: ComponentFixture<DoctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctComponent]
    });
    fixture = TestBed.createComponent(DoctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
