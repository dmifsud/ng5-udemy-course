import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  servers = ['Test server 1', 'Test server 2'];
  constructor() { }
  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onInputServerName($event: Event) {
    console.log($event);
  }

  addNewServer() {
    this.servers = [...this.servers, 'another test'];
    this.serverCreated = true;
    setTimeout(() => {
      this.serverCreated = false;
    }, 10000);
  }

}
