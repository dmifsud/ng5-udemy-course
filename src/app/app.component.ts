import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  tempRouting = 'recipes';
  redirectTo(ref) {
    this.tempRouting = ref;
  }
  isElementShowing($event: boolean) {
    console.log('is element showing', $event);
  }
}
