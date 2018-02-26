import { Directive, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIsShowing]'
})
export class IsShowingDirective {

  @Output('appIsShowing') appIsShowing = new EventEmitter<boolean>();

  constructor(private el: ElementRef) { }

  @HostListener('document:scroll', ['$event']) onscroll($event: Event) {
    this.appIsShowing.emit(this.isInViewport(this.el.nativeElement));
  }

  private isInViewport(element: Element) {
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || html.clientHeight) &&
          rect.right <= (window.innerWidth || html.clientWidth)
      );
  }

}
