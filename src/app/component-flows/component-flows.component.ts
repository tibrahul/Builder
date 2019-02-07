import { Component, OnInit } from '@angular/core';
import { FlowManagerService } from '../flow-manager/flow-manager.service';
import { ComponentFlowsService } from './component-flows.service';

@Component({
  selector: 'app-component-flows',
  templateUrl: './component-flows.component.html',
  styleUrls: ['./component-flows.component.scss']
})
export class ComponentFlowsComponent implements OnInit {
  columnDefs;
  icons;
  rowData;
  rowSelection;
  defaultColDef;
  gridApi;
  data: any = [];
  microFlow: any = [];
  gridColumnApi;
  showMicroFlow = false;
  microColDef;
  flow_component_sequence: any = [];
  selectedFlow: any = [];
  message: string;
  constructor(private flowManagerService: FlowManagerService, private componentFlowsService: ComponentFlowsService) {
    this.columnDefs = [
      { headerName: 'Component Name', field: 'component_name' },
      { headerName: 'FrameWork', field: 'dev_framework' },
      { headerName: 'Type', field: 'type' },
      { headerName: 'Sequence', field: 'sequence_id' },
      { headerName: 'Language', field: 'dev_language' },
      { headerName: 'Label', field: 'label' },
      { headerName: 'Description', field: 'description' },


    ];
    this.microColDef = [
      { headerName: 'sequence_id', field: 'sequence_id' },
      { headerName: 'component_name', field: 'component_name' },
      { headerName: 'micro_flow_step_name', field: 'micro_flow_step_name' }
    ];
    this.rowSelection = 'single';
    this.defaultColDef = {
      enableValue: true,
      // sortable: true,
      filter: true,
      resizable: true
    };
  }

  ngOnInit() {
    this.getFlowName();
    this.getFlowComponentByName();
  }
  getFlowComponentByName() {
    this.flowManagerService.getFlowComponentByName(this.message).subscribe((data) => {
      this.rowData = data;
      console.log(data);
      this.data = this.rowData.flow_comp_seq;
      console.log(this.rowData.flow_comp_seq);
    });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.gridApi.sizeColumnsToFit();
  }
  onGridMicroFlowReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }
  getFlowName() {
    this.flowManagerService.currentMessage.subscribe((message) => {
      this.message = message;
    });
  }
  getMicroFlowName(component) {
    this.componentFlowsService.getMicroFlowByName(component).subscribe((data) => {
      if (data) {
        this.showMicroFlow = true;
      }
      this.microFlow = data;
    });
  }
  onSelectionChanged(show) {
    const selectedRows = this.gridApi.getSelectedRows();
    this.selectedFlow = selectedRows;
    const dataComponent = this.selectedFlow[0].component_name;
    console.log(this.selectedFlow);
    console.log('hello+++>>>:::::::++++++', this.selectedFlow[0].component_name);
    this.getMicroFlowName(this.selectedFlow[0].component_name);
    // this.router.navigate(['flow-component'],{ skipLocationChange: true });
  }

}
