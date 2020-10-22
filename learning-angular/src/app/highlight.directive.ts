import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() colour?: string;
  private rainbowColours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  constructor(private elm: ElementRef) {
  }
  @HostListener('click') onClick(): void{
    this.highlightMe(this.rainbowColours[Math.floor(Math.random() * this.rainbowColours.length)]);
  }

  ngOnInit(): void {
    this.highlightMe(this.colour);
  }
  highlightMe(colour: string): void{
    this.elm.nativeElement.style.backgroundColor = colour || 'green';
  }

}
