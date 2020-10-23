import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {
  @Input() type?: string;
  constructor(private elm: ElementRef) { }
  @HostListener('mouseenter') onHover(): void{
    this.addHoverStyle(this.type);
  }
  @HostListener('mouseleave') endHover(): void {
    this.removeHoverStyle(this.type);
  }
  addHoverStyle(type: string): void{
    switch (type) {
      case 'title':
        this.elm.nativeElement.style.textDecoration = 'underline';
        return;
      case 'tag':
        this.elm.nativeElement.style.fontWeight = 'bold';
        return;
      default:
        return;
    }
  }
  removeHoverStyle(type: string): void{
    switch (type) {
      case 'title':
        this.elm.nativeElement.style.textDecoration = 'none';
        return;
      case 'tag':
        this.elm.nativeElement.style.fontWeight = 'normal';
        return;
      default:
        return;
    }
  }

}
