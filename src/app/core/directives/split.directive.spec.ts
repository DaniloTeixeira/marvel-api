import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplitDirective } from './split.directive';

@Component({
  selector: 'app-directive-test',
  standalone: true,
  imports: [SplitDirective],
  template: `
    <span
      appSplit
      id="span-1"
      [charToSplit]="'#'"
      [strValue]="'Test #(123)'"
    ></span>

    <span
      appSplit
      id="span-2"
      [returnIndex]="1"
      [charToSplit]="'#'"
      [strValue]="'Test #(123)'"
    ></span>

    <span
      appSplit
      id="span-3"
      [returnIndex]="1"
      [charToSplit]="'#'"
      [strValue]="'Test (123)'"
    ></span>

    <span
      appSplit
      id="span-4"
      [returnIndex]="1"
      [alternativeText]="'No name available'"
    ></span>

    <span appSplit id="span-5"></span>
  `,
})
class TestDirectiveComponent {}

describe('SplitDirective', () => {
  let fixture: ComponentFixture<TestDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestDirectiveComponent],
    });

    fixture = TestBed.createComponent(TestDirectiveComponent);
    fixture.detectChanges();
  });

  it('should display the first index of split result', () => {
    const span = fixture.nativeElement.querySelector('#span-1');

    expect(span.textContent).toBe('Test');
  });

  it('should display the second index of split result', () => {
    const span = fixture.nativeElement.querySelector('#span-2');

    expect(span.textContent).toBe('(123)');
  });

  it('should display the original value, when the charToSplit is not found', () => {
    const span = fixture.nativeElement.querySelector('#span-3');

    expect(span.textContent).toBe('Test (123)');
  });

  it('should display "No name available", when the strValue is undefined', () => {
    const span = fixture.nativeElement.querySelector('#span-4');

    expect(span.textContent).toBe('No name available');
  });

  it('should be undefined, when the strValue and alternativeText are undefined', () => {
    const span = fixture.nativeElement.querySelector('#span-5');

    expect(span.textContent).toBe('');
  });
});
