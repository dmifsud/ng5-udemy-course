import { Component, OnInit } from '@angular/core';

let STATUS = {
    online: 'Online',
    offline: 'offline'
};

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: green;
        }
        .offline {
            color: red;
        }
    `]
})
export class ServerComponent implements OnInit {
    serverId = 10;
    serverStatus: string;
    ngOnInit() {
        this.serverStatus = Math.random() > 0.5 ? STATUS.online : STATUS.offline;
    }

    getStatusColor() {
        switch (this.serverStatus) {
            case STATUS.online:
            return 'green';
            case STATUS.offline:
            return 'red';
        }
    }

    getStatusCssClass() {
        switch (this.serverStatus) {
            case STATUS.online:
            return 'online';
            case STATUS.offline:
            return 'offline';
        }
    }
}