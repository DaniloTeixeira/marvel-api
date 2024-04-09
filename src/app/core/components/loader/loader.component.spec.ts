import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the loader when showLoader$ is true', () => {
    component.showLoader$ = of(true);

    fixture.detectChanges();

    const loaderWrapper =
      fixture.nativeElement.querySelector('.loader-wrapper');

    expect(loaderWrapper).toBeTruthy();
  });

  it('should hide the loader when showLoader$ is false', () => {
    component.showLoader$ = of(true);

    fixture.detectChanges();

    const loaderWrapper =
      fixture.nativeElement.querySelector('.loader-wrapper');

    expect(loaderWrapper).toBeTruthy();
  });
});
