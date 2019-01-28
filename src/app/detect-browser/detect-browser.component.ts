import { Component, OnInit } from '@angular/core';
import {detect} from 'detect-browser'


@Component({
  selector: 'app-detect-browser',
  templateUrl: './detect-browser.component.html',
  styleUrls: ['./detect-browser.component.scss']
})
export class DetectBrowserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const browser = detect();
    if (browser.name!=="chrome") {
      alert("Your Browser is not a chrome so may some of the features not work please try to run in chrome")
      console.log(browser.name);
      console.log(browser.version);
      console.log(browser.os);
    }
  }

}


