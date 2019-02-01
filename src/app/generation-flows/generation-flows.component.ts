import { Component, OnInit } from '@angular/core';
import { flow, flow_components } from './dummy.json'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-generation-flows',
  templateUrl: './generation-flows.component.html',
  styleUrls: ['./generation-flows.component.scss']
})
export class GenerationFlowsComponent implements OnInit {
  flowsequence = [];
  dropdownSettings = {};
  dropdownList = [];
  items = [];
  flows = flow;
  flow_components = flow_components;
  constructor() {
  }

  ngOnInit() {
    this.flows
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    
    console.log(this.flows)
    console.log(this.flow_components)
  }
  onItemSelect(item: any) {
    this.items.push(item.name)
    console.log(this.items)
    console.log(item.name);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
