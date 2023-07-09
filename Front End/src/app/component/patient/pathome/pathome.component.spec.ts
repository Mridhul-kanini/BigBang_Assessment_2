import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathomeComponent } from './pathome.component';

describe('PathomeComponent', () => {
  let component: PathomeComponent;
  let fixture: ComponentFixture<PathomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PathomeComponent]
    });
    fixture = TestBed.createComponent(PathomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
