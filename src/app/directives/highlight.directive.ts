import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') bgcolor?: string;
  @Input() color?: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover')
  mouseover(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.bgcolor || 'yellow')
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
  }

  @HostListener('mouseout')
  mouseout(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
    this.renderer.removeStyle(this.el.nativeElement, 'color');
  }

}
