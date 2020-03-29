import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // this is called as select by element <app-servers></app-servers> - this is used typically
  //selector: '[app-servers]', // this is called as select by attribute <div app-servers></div>
  //selector: '.app-servers', // this is called as select by class <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created !";
  serverName = "";
  serverCreated = false;
  constructor() { 
    setTimeout(() => {this.allowNewServer = true;
      this.serverName = "TestServer";}, 3000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created. Name is " + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
