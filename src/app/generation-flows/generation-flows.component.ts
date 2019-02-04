import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { GeneratonFlowsService } from './generaton-flows.service';
import { generation_flow } from './generation-flows.model'

@Component({
  selector: 'app-generation-flows',
  templateUrl: './generation-flows.component.html',
  styleUrls: ['./generation-flows.component.scss']
})
export class GenerationFlowsComponent implements OnInit {

  private generation_flow: generation_flow = {
    flow_name: '',
    flow_sequence: [],
  }
  flowsequence = [];
  dropdownSettings = {};
  getGenFlow: any;
  dropdownList = [];
  items = [];
  components: any = [];
  dataFlow: any;
  dataFlowComponent: any;
  showMainContent: Boolean = true;
  selectedGenFlow: any = {};
  generationFlow: any = [];
  selectedFlow: any = {}
  constructor(private generatonFlowsService: GeneratonFlowsService) {
  }

  ngOnInit() {
    this.getFl();
    this.getFlComp();
    this.getAllGenFlow();
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  getFlComp(){
    this.generatonFlowsService.getFlowComponents().subscribe((flowComponentData) => {
      this.dataFlowComponent = flowComponentData;
    });
  }
  getFl(){
    this.generatonFlowsService.getFlows().subscribe((flowData) => {
      this.dataFlow = flowData;
    });
  }
  addFlow(){
    this.generatonFlowsService.addGenFlow(this.generation_flow).subscribe(data => {
      console.log("data", data);
      this.getAllGenFlow();
      this.showMainContent = false
    },
      error => {
        console.log('Check the browser console to see more info.', 'Error!');
      });
  }
  getAllGenFlow(){
    this.generatonFlowsService.getGenFlow().subscribe((getGenFlow) => {
      this.getGenFlow = getGenFlow;
      console.log("Hello i am genFlow",this.getGenFlow)
    });
  }
  onItemSelect(item: any) {
    this.items.push(item.name)
  }
  onSelectAll(items: any) {
    console.log("items", items)
    items.forEach((data) => {
      this.items.push(data.name)
    });
    console.log("drag and drop", this.items)
  }
  empty() {
    this.items = [];
  }
  onUnSelectAll(items: any) {
    this.empty();
  }
  onItemDeSelect(item) {
    let index = this.items.indexOf(item.name)
    this.items.splice(index, 1)
  }
  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  selectFlow(flowSelect) {
    this.selectedFlow = this.dataFlow.find((fl) => { return fl.name === flowSelect })
  }
  saveGenFlow() {
    this.items.forEach((item) => {
      this.components.push(this.dataFlowComponent.find((fl) => { return fl.name === item }))
    })
    this.generation_flow.flow_name = this.selectedFlow;
    this.generation_flow.flow_sequence = this.components;
    this.addFlow();
  }
}

