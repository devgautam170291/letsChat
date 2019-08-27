import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  constructor() { }
  showFrndSearch: boolean = false;

  ngOnInit() {
  }

  showFrnd(val){
    if(this.showFrndSearch === val){
      return;
    }
    this.showFrndSearch = val;
  }

}
