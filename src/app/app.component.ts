import { Component, Inject, OnInit } from '@angular/core';@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'GeppettoBuilder';
  loading: boolean = true;
  start: number = 0;
  constructor() { }

  ngOnInit() { 
    
  }
}
