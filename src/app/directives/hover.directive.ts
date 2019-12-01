import {
  Directive, ElementRef, OnInit,
  Renderer2, HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input('appHover') color: string;

  constructor(private element: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.element.nativeElement);
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.color);
  }

  @HostListener('mouseover') onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseout') onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'white');
  }

}
