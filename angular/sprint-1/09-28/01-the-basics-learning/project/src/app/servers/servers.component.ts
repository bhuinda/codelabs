import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  isServerCreated = false;
  serverName = 'Test server';
  serverUsername = '';
  servers = ['Test Server', 'Test Server 2'];
  date = new Date();

  buttonClicks: number[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = `Server [${this.serverName}] was created.`
    this.isServerCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  getDate() {
    return this.date = new Date();
  }
}

