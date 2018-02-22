import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  evenOdds = [];
  onGameStart(num = { counter : 0 }) {
    this.evenOdds.push(num.counter);
  }
}
