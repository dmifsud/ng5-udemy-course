import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalTimer;
  count = 0;
  @Output() onEventStart = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    if (!this.intervalTimer) {
      this.intervalTimer = setInterval(() => {
        this.count++;
        this.onEventStart.emit({ counter: this.count });
      }, 1000);
    }
  }

  onStop() {
    clearInterval(this.intervalTimer);
    delete this.intervalTimer;
  }
}
