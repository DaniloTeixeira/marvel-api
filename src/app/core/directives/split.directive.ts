import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appSplit]',
  standalone: true,
})
export class SplitDirective implements OnInit {
  @Input() returnIndex = 0;
  @Input() strValue?: string;
  @Input() alternativeText?: string;
  @Input({ required: true }) charToSplit!: string;

  private elementRef = inject(ElementRef);

  ngOnInit() {
    this.splitStr();
  }

  private splitStr(): void {
    if (!this.strValue) {
      this.elementRef.nativeElement.textContent = this.alternativeText;
      return;
    }

    const strArray = this.strValue.split(this.charToSplit);

    if (strArray.length > 1) {
      this.elementRef.nativeElement.textContent =
        strArray[this.returnIndex].trim();
    } else {
      this.elementRef.nativeElement.textContent = this.strValue.trim();
    }
  }
}
