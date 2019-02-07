import { Component, OnInit } from '@angular/core';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { GeneratonFlowsService } from './generaton-flows.service';
import { generation_flow } from './generation-flows.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IFlow } from './interface/flow';

@Component({
  selector: 'app-generation-flows',
  templateUrl: './generation-flows.component.html',
  styleUrls: ['./generation-flows.component.scss']
})
export class GenerationFlowsComponent implements OnInit {

  private generation_flow: generation_flow = {
    flow_name: '',
    flow_sequence: [],
  };
  gridApi;
  gridColumnApi;
  getGenFlow: any;
  dataFlow: any;
  dataFlowComponent: any;
  selectedFlow: any = [];
  rowSelection;
  rowData: any;
  columnDefs;
  message: string;
  defaultColDef;
  getRowNodeId;

  displayModel: String = 'none';
  createFlowForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private generatonFlowsService: GeneratonFlowsService, private router: Router) {
    this.columnDefs = [
      {
        headerName: 'Name', field: 'name',
        // headerCheckboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },
      { headerName: 'Label', field: 'label' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'Action', field: 'action_on_data' },


    ];
    this.rowSelection = 'single';
    this.defaultColDef = {
      enableValue: true,
      // sortable: true,
      filter: true,
      resizable: true,
      // editable: true,
    };
  }

  ngOnInit() {
    this.createFlowForm = this.formBuilder.group({
      name: ['', Validators.required],
      label: ['', Validators.required],
      description: '',
      action_on_data: ['', Validators.required],
    });
    this.getFlow();
    this.getFlowComp();
    this.getAllGenFlow();
    // this.generatonFlowsService.currentMessage.subscribe(message => this.message = message)
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: '_id',
    //   textField: 'name',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
  }

  getFlowComp() {
    this.generatonFlowsService.getFlowComponents().subscribe((flowComponentData) => {
      this.dataFlowComponent = flowComponentData;
    });
  }

  getFlow() {
    this.generatonFlowsService.getFlows().subscribe((flowData) => {
      this.dataFlow = flowData;
      console.log('dataFlow', this.dataFlow);
      this.rowData = flowData;

    });
  }

  openModal() {
    this.displayModel = 'block';
  }
  onCloseHandled() {
    this.displayModel = 'none';
    // this.submitted = false;
    this.createFlowForm.clearValidators();
    this.createFlowForm.reset();
  }

  createFlowModel() {
    console.log('test values are ---------- ', this.createFlowForm.getRawValue());
    // const createFlow = {
      this.generatonFlowsService.addGenFlow(this.createFlowForm.getRawValue())
      .subscribe(
        (data) => {
       console.log('successfully added gen flow -- ', data);
        },
        (error) => {
          console.log('add gen flow error --- ', error);
        }
      )

    // }
  }
  // addFlow() {
  //   this.generatonFlowsService.addGenFlow(this.generation_flow).subscribe(data => {
  //     console.log("data", data);
  //     this.getAllGenFlow();
  //     this.showMainContent = false
  //   },
  //     error => {
  //       console.log('Check the browser console to see more info.', 'Error!');
  //     });
  // }

  getAllGenFlow() {
    this.generatonFlowsService.getGenFlow().subscribe((getGenFlow) => {
      this.getGenFlow = getGenFlow;
    });
  }

  // onItemSelect(item: any) {
  //   this.items.push(item.name)
  //   console.log(this.items)
  // }

  // onSelectAll(items: any) {
  //   console.log("items", items)
  //   items.forEach((data) => {
  //     this.items.push(data.name)
  //   });
  //   console.log("drag and drop", this.items)
  // }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  onSelectionChanged(show) {
    const selectedRows = this.gridApi.getSelectedRows();
    this.selectedFlow = selectedRows;
    this.generatonFlowsService.changeMessage(this.selectedFlow[0].name);
    // this.router.navigate(['flow-component'], { skipLocationChange: true });
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


  // onUnSelectAll(items: any) {
  //   this.items = items;
  // }

  // onItemDeSelect(item) {
  //   let index = this.items.indexOf(item.name)
  //   this.items.splice(index, 1)
  //   console.log(this.items)
  // }

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

