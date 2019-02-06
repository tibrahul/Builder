import { Component, OnInit } from '@angular/core';
import { GeneratonFlowsService } from '../generation-flows/generaton-flows.service';
// import { ComponentFlowsService } from './component-flows.service';

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
  gridColumnApi;
  flow_component_sequence: any = [];
  selectedFlow: any = [];
  message: string;
  constructor(private generatonFlowsService: GeneratonFlowsService) {
    this.columnDefs = [
      {headerName: 'Component Name', field: 'component_name'},
      {headerName: 'FrameWork', field: 'dev_framework'},
      {headerName: 'Type', field: 'type'},
      {headerName: 'Sequence', field: 'sequence_id'},
      {headerName: 'Language', field: 'dev_language'},
      {headerName: 'Label', field: 'label'},
      {headerName: 'Description', field: 'description'},
      

    ];
    this.rowSelection = "single";
    this.defaultColDef = {
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      filter: true,
      resizable: true
    };
  }

  ngOnInit() {
    this.getFlowName();
    this.getFlowComponentByName();
  }
  getFlowComponentByName() {
    this.generatonFlowsService.getFlowComponentByName(this.message).subscribe((data) => {
      this.rowData = data;
      console.log(data)
      this.data = this.rowData.flow_comp_seq;
      console.log(this.rowData.flow_comp_seq)
    })
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.gridApi.sizeColumnsToFit();
  }
  getFlowName() {
    this.generatonFlowsService.currentMessage.subscribe((message) => {
      this.message = message
    });
  }
  // getMicroFlowName() {
  //   this.componentFlowsService.currentMessage.subscribe((message) => {
  //     this.message = message
  //   });
  // }
  onSelectionChanged(show) {
    var selectedRows = this.gridApi.getSelectedRows();
    this.selectedFlow = selectedRows;
    console.log(this.selectedFlow)
    this.generatonFlowsService.changeMessage(this.selectedFlow[0].component_name)
    console.log(this.selectedFlow[0].component_name)
    // this.router.navigate(['flow-component'],{ skipLocationChange: true });
  }

}
