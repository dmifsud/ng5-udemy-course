import { Directive, Renderer2, OnInit, ElementRef, HostListener, Host, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') appBetterHighlight = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }
  @HostListener('mouseenter') mouseover(mouseEvent: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.appBetterHighlight || 'blue';
  }

  @HostListener('mouseleave') mouseleave(mouseEvent: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
