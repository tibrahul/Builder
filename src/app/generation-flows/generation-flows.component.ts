import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { GeneratonFlowsService } from './generaton-flows.service';
import { generation_flow } from './generation-flows.model'
import { Router } from '@angular/router';
import * as microFLow from './micro-flow.json'

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
  gridApi;
  gridColumnApi;
  flowsequence = [];
  dropdownSettings = {};
  getGenFlow: any;
  checkSelectedFlow = false;
  checkSelectedFlowComponent = false;
  checkSelectedMicroFlow = false;
  dropdownList = [];
  items = [];
  dataFlow: any;
  microFLowData: any = [];
  dataFlowComponent: any;
  showMainContent: Boolean = true;
  selectedGenFlow: any = [];
  generationFlow: any = [];
  selectedFlow: any = [];
  showMicroFlow = false;
  selectedMicroFlow: any = [];
  selectedFlowComponents: any = [];
  componetData: any;
  columnDefsMicroFlow: any =[];
  rowDataMicroFlow: any =[];
  rowSelection;
  rowData: any;
  columnDefs;
  autoGroupColumnDef;

  constructor(private generatonFlowsService: GeneratonFlowsService, private router: Router) {
    this.columnDefs = [
      { headerName: 'Name', field: 'name', width: 400 },
      { headerName: 'Description', field: 'description', width: 400 },

    ];
    this.columnDefsMicroFlow = [
      { headerName: 'Name', field: 'name', width: 400 },
    ];
    this.rowDataMicroFlow = [
      { name: 'GpStart'},
      { name: 'GpValidate'},
      { name: 'GpServerPost'},
      { name: 'GpServerResponse'},
      { name: 'GpDisplayServerResponse'},
      { name: 'GpTransition'},
      { name: 'GpEnd'},
      { name: 'GpDeclareNoun'},
      { name: 'GpServiceCall'},
      { name: 'GpReturn'},
      { name: 'GpDaoCall'},
      { name: 'GpConfirm'},
      { name: 'GpMessage_Instantiation'},
      { name: 'GpJpaQuery'},
      { name: 'GpQueryExecuteSt'},
      { name: 'GpArrayListDeclare'},
      { name: 'GpException'},
      { name: 'GpVariable_statement'},
      { name: 'GpService_call'},
      { name: 'GpVerbKey'},
      { name: 'GpSqlQuery'},
      { name: 'GpHeaders'},
      { name: 'GpOptons'},
      { name: 'GpCodeToAdd'},
      { name: 'GpRequest'},

    ];
    this.rowSelection = "multiple";
  }

  ngOnInit() {
    console.log("hello micro flow", microFLow)
    this.getFlow();
    this.getFlowComp();
    this.getAllGenFlow();
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getFlowComp() {
    this.generatonFlowsService.getFlowComponents().subscribe((flowComponentData) => {
      this.dataFlowComponent = flowComponentData;
    });
  }

  getFlow() {
    this.generatonFlowsService.getFlows().subscribe((flowData) => {
      this.dataFlow = flowData;
      this.rowData = flowData;

    });
  }

  addFlow() {
    this.generatonFlowsService.addGenFlow(this.generation_flow).subscribe(data => {
      console.log("data", data);
      this.getAllGenFlow();
      this.showMainContent = false
    },
      error => {
        console.log('Check the browser console to see more info.', 'Error!');
      });
  }

  getAllGenFlow() {
    this.generatonFlowsService.getGenFlow().subscribe((getGenFlow) => {
      this.getGenFlow = getGenFlow;
    });
  }

  onItemSelect(item: any) {
    this.items.push(item.name)
    console.log(this.items)
  }

  onSelectAll(items: any) {
    console.log("items", items)
    items.forEach((data) => {
      this.items.push(data.name)
    });
    console.log("drag and drop", this.items)
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged(show) {
    var selectedRows = this.gridApi.getSelectedRows();
    this.selectedFlow = selectedRows;
    if (this.selectedFlow.length === 1) {
      this.checkSelectedFlow = true;
    }
    // this.router.navigate(['flow-component'],{ skipLocationChange: true });
  }

  // onSelectionMicroFlowChanged(show) {
  //   var selectedRows = this.gridApi.getSelectedRows();
  //   this.selectedMicroFlow = selectedRows;
  //   if(this.selectedMicroFlow.length>1){

  //   }
  //   this.microFLowData.push(this.selectedMicroFlow.length)
  //   console.log("hello+++++++++++++",this.microFLowData)
  //   if (this.selectedMicroFlow.length >= 1) {
  //     this.checkSelectedFlowComponent = true;
  //   }
  //   // this.router.navigate(['flow-component'],{ skipLocationChange: true });
  // }

  // onSelectionFlowChanged(show) {
  //   var selectedFlowRows = this.gridApi.getSelectedRows();
  //   this.selectedFlowComponents = selectedFlowRows;
  //   if (this.selectedFlowComponents.length === 1) {
  //     this.checkSelectedFlow = false;
  //     this.checkSelectedMicroFlow = true;
  //   }
  // }

  empty() {
    this.dataFlowComponent = [];
  }

  onUnSelectAll(items: any) {
    this.items = items;
  }

  onItemDeSelect(item) {
    let index = this.items.indexOf(item.name)
    this.items.splice(index, 1)
    console.log(this.items)
  }

  addFlowComponent(){
    
  }

  // onDrop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  // }

  // selectFlow(flowSelect) {
  //   this.selectedFlow = this.dataFlow.find((fl) => { return fl.name === flowSelect })
  // }

  // saveGenFlow() {
  //   this.items.forEach((item) => {
  //     this.components.push(this.dataFlowComponent.find((fl) => { return fl.name === item }))
  //   })
  //   this.generation_flow.flow_name = this.selectedFlow;
  //   this.generation_flow.flow_sequence = this.components;
  //   this.addFlow();
  //   this.empty();
  // }

}

