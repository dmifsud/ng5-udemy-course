import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navigateTo = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  goTo(nav) {
    this.navigateTo.emit(nav);
  }

}
