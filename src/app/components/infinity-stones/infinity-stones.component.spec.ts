import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinityStonesComponent } from './infinity-stones.component';

describe('InfinityStonesComponent', () => {
  let component: InfinityStonesComponent;
  let fixture: ComponentFixture<InfinityStonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfinityStonesComponent]
    });
    fixture = TestBed.createComponent(InfinityStonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
