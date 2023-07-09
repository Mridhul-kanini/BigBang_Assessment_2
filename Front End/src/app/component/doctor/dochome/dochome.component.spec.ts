import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DochomeComponent } from './dochome.component';

describe('DochomeComponent', () => {
  let component: DochomeComponent;
  let fixture: ComponentFixture<DochomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DochomeComponent]
    });
    fixture = TestBed.createComponent(DochomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
