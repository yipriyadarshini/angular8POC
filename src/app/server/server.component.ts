import { Component } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
}) 

export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'Offline';

  allowNewServer = false;
  serverCreationStatus = "No server was created";

  constructor() {
    setTimeout(() => { 
      this.allowNewServer = true;
    }, 2000);
  }

  getServerStatus() {
    this.serverCreationStatus = 'Server was created';
  }
}