import { Component, OnInit, ɵConsole } from '@angular/core';
import { FlowManagerService } from '../flow-manager/flow-manager.service';
import { ComponentFlowsService } from './component-flows.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMicroFlow } from './interface/microFlow';
import { IFlowComponent } from './interface/flowComponents';
import { IGenerateFlow } from '../flow-manager/interface/generationFlow';



@Component({
  selector: 'app-component-flows',
  templateUrl: './component-flows.component.html',
  styleUrls: ['./component-flows.component.scss']
})
export class ComponentFlowsComponent implements OnInit {
  iMicroFlow: IMicroFlow = {
    _id:'',
    sequence_id: '',
    component_name: '',
    micro_flow_step_name: '',
  }
  private generateFlow: IGenerateFlow = {
    flow_name: '',
    flow_sequence: [],
  };
  iFlowComponent: IFlowComponent = {
    component_name: '',
    label: '',
    type: '',
    sequence_id: '',
    dev_language: '',
    dev_framework: '',
    description: '',
  }
  columnDefs;
  getFlowCompName: string;
  icons;
  rowData;
  rowSelection;
  defaultColDef;
  flowCompGrid;
  microFlowGrid;
  microFlowDatatoUpdate: any = [];
  data: any = [];
  microFlow: any = [];
  gridColumnApi;
  microFlowId;
  showMicroFlow: Boolean = false;
  isRemoveModel: Boolean = false;
  microColDef;
  flow_component_sequence: any = [];
  selectedFlow: any = [];
  selectedMFlow: any=[];
  flowCompSeq: any = [];
  message: string;
  addModel: String = 'none';
  addMFModel: String = 'none';
  createFlowComponentModel: FormGroup;
  createMFlowForm: FormGroup;
  isCreateModel: Boolean = true;
  gridOptions;
  addToMicroFlow: Boolean = null;

  constructor(private formBuilder: FormBuilder, private flowManagerService: FlowManagerService, private componentFlowsService: ComponentFlowsService) {
    this.columnDefs = [
      { headerName: 'Component Name', field: 'component_name', checkboxSelection: true },
      { headerName: 'FrameWork', field: 'dev_framework' },
      { headerName: 'Type', field: 'type' },
      { headerName: 'Sequence', field: 'sequence_id' },
      { headerName: 'Language', field: 'dev_language' },
      { headerName: 'Label', field: 'label' },
      { headerName: 'Description', field: 'description' },
    ];
    this.microColDef = [
      { headerName: 'sequence_id', field: 'sequence_id', sort: 'asc', checkboxSelection: true },
      { headerName: 'component_name', field: 'component_name' },
      { headerName: 'micro_flow_step_name', field: 'micro_flow_step_name' }
    ];
    this.rowSelection = 'single';
    this.defaultColDef = {
      enableValue: true,
      resizable: true
    };
  }

  ngOnInit() {
    this.getDataFromFlowService();
    this.getFlowComponentByName();
    this.createFlowComponentModel = this.formBuilder.group({
      component_name: '',
      label: '',
      type: '',
      sequence_id: '',
      dev_language: '',
      dev_framework: '',
      description: '',
    });
    this.createMFlowForm = this.formBuilder.group({
      sequence_id: '',
      component_name: '',
      micro_flow_step_name: '',
    });
  }

  getDataFromFlowService() {
    this.flowManagerService.currentMessage.subscribe((message) => {
      this.message = message;
    }, (error) => {
      console.log("------------>err--------->>", error)
    });
  }

  openAddModal() {
    this.addModel = 'block'
  }

  openAddMFModal() {
    this.addMFModel = 'block'
  }

  onCloseHandled() {
    this.createFlowComponentModel.clearValidators();
    this.createFlowComponentModel.reset();
    this.addModel = 'none';
  }

  onCloseMFHandled() {
    this.addToMicroFlow = null
    this.createMFlowForm.clearValidators();
    this.createMFlowForm.reset();
    this.addMFModel = 'none';
  }

  getFlowComponentByName() {
    console.log("asodhofhso",this.message)
    this.componentFlowsService.getFlowGenComponentByName(this.message).subscribe((data) => {
      console.log("adshffdf",data)
      this.rowData = data;
      console.log(this.rowData);
      this.data = this.rowData.flow_comp_seq;
    });
  }

  createFlowComponent() {
    this.componentFlowsService.saveFlowComponent(this.createFlowComponentModel.getRawValue()).subscribe((data) => {
      this.rowData.flow_comp_seq.push(this.createFlowComponentModel.getRawValue())
      this.updateGenFlow();
      this.onCloseHandled();
    },
      (error) => {
        console.log('add gen flow error --- ', error);
      } 
    );
  }
  deleteRowComponent() {
    console.log("i am in delete")
    this.getFlowCompName = this.selectedFlow[0].component_name;
    this.rowData.flow_comp_seq.forEach((data,index)=>{
      if(this.getFlowCompName === data.component_name){
        this.rowData.flow_comp_seq.splice(index,1)
        this.updateGenFlow();
        return
      }
    })

  }

  updateRow() {
    this.isCreateModel = false;
    this.iFlowComponent = this.selectedFlow[0];
    console.log(this.createFlowComponentModel)
    this.openAddModal();
  }

  updateFlowCompModel() {
    this.getFlowCompName = this.createFlowComponentModel.getRawValue().component_name;
    this.rowData.flow_comp_seq.forEach((data,index)=>{
      if(this.getFlowCompName === data.component_name){
        this.rowData.flow_comp_seq[index] = this.createFlowComponentModel.getRawValue()
        this.updateGenFlow();
        this.onCloseHandled();
        return
      }
    })
    console.log("in update flow",)
  }

  updateGenFlow() {
    this.componentFlowsService.updateGenFlow(this.rowData).subscribe(data => {
      console.log("i am in generation", data)
      this.getFlowComponentByName();
    }, error => {
      console.log("===got an error r===")
    })
  }
  updataFLowComp(){
    console.log("i am in updateflow comp",this.rowData)
    this.componentFlowsService.updateFlowComponent(this.rowData).subscribe(data => {
      console.log("i am in generation", data)
      this.getFlowComponentByName();
    }, error => {
      console.log("===got an error r===")
    })
    this.onCloseHandled();
  }

  onGridReady(params) {
    this.flowCompGrid = params.api;
    this.gridColumnApi = params.columnApi;
    this.flowCompGrid.sizeColumnsToFit();
  }
  onGridMicroFlowReady(params) {
    this.microFlowGrid = params.api;
    this.gridColumnApi = params.columnApi;
    this.microFlowGrid.sizeColumnsToFit();
    console.log("----------v-v->", this.microColDef)
    console.log("----------v-v->", this.microFlowGrid)
    // this.microFlowGrid.enableSorting = true
    // this.microFlowGrid.getColumn('sequence_id').setSort("asc")
  }

  getMicroFlowName(component) {
    this.componentFlowsService.getMicroFlowByCompName(component).subscribe(data => {
      console.log("selected data____+++++++++ ", data)
      if (data) {
        this.showMicroFlow = true;
      }
      this.microFlow = data;
    }, error => {
      console.log("==== ==  ? ? ", error)
    })
  }
  microFlowView() {
    if(this.selectedFlow.length!=0){
    this.getMicroFlowName(this.selectedFlow[0].component_name);
    }
  }

  createMicroFLow() {
    let dataToSave = this.createMFlowForm.getRawValue()
    dataToSave.component_name = this.selectedFlow[0].component_name
    this.componentFlowsService.saveMicroFlow(dataToSave).subscribe((data) => {
      console.log("i am in add micro flow",data)
      this.onCloseHandled();

    },
      (error) => {
        console.log('add gen flow error --- ', error);
      }
    );
  }

  updateRowMicro() {
    console.log("u need this id",this.selectedMFlow[0])
    this.iMicroFlow = this.selectedMFlow[0];
    console.log("u need this id",this.iMicroFlow)
    this.isRemoveModel = true;
    this.openAddMFModal();
  }
  updateMicroFlow(){
    this.microFlowDatatoUpdate = this.createMFlowForm.getRawValue();
    if(this.iMicroFlow.component_name === this.microFlowDatatoUpdate.component_name){
      this.iMicroFlow.component_name = this.microFlowDatatoUpdate.component_name
      this.iMicroFlow.sequence_id = this.microFlowDatatoUpdate.sequence_id
      this.iMicroFlow.micro_flow_step_name = this.microFlowDatatoUpdate.micro_flow_step_name
    }
    this.updateMicroFlowService();
  }
  updateMicroFlowService(){
    console.log("i am the one your looking for",this.iMicroFlow)
    this.componentFlowsService.updateMicroFlow(this.iMicroFlow).subscribe(data=>{
      console.log("i am in data",data)
    })
    this.onCloseHandled();
  }
  deleteMicroFlow(){
    console.log("i am the id ur needed",this.selectedMFlow[0]._id)
    this.componentFlowsService.deleteMicroFlow(this.selectedMFlow[0]._id).subscribe(data=>{
      console.log(data)
    }), (error) => {
      console.log(error)
     }
  }
  onSelectionChange() {
    let selectedRows = this.flowCompGrid.getSelectedRows();
    this.selectedFlow = selectedRows;
    console.log(" [   = =  =  > > >", this.selectedFlow)
    this.microFlowView();
  }
  onSelectionMFChange(){
    let selectedMFRows = this.microFlowGrid.getSelectedRows();
    this.selectedMFlow = selectedMFRows;
    console.log(" [   = =  =  > > >", this.selectedMFlow)
  }

}
