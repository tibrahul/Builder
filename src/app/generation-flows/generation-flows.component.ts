import { Component, OnInit } from '@angular/core';
import { flow, flow_components } from './dummy.json'

@Component({
  selector: 'app-generation-flows',
  templateUrl: './generation-flows.component.html',
  styleUrls: ['./generation-flows.component.scss']
})
export class GenerationFlowsComponent implements OnInit {
  flowsequence = [];

  
  flows = flow;
  flow_components = flow_components;

  constructor() {
  }

  ngOnInit() {
    console.log(this.flows)
    console.log(this.flow_components)
  }

}
