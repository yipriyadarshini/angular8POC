import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  checkUserNameButton = false;
  userName: string = '';
  constructor() { 
    
  }

  ngOnInit() {
  }

  checkUserName() {
    if(this.userName.length > 0) {
      this.checkUserNameButton = true;
    }
  }


}