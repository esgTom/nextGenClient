import { Component, OnInit } from '@angular/core';
import { Table } from '../../_models/table';
import { Column } from '../../_models/column';
import { NextGenDataService } from '../../services/next-gen-data.service';
import { ProjectBOService } from '../../_business-objects/project-bo.service';
import { ErrorService } from '../../_core/error-service.service';

@Component({
  selector: 'next-gen-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    tables: Table[];
    columns: Column[];

    selectedTable: Table = null;
    selectedColumn: Column = null;
    updateColumn: Column = null;

    selectedTableId: Number = null;

  constructor(
    private _dataService: NextGenDataService,
    private _businessObject: ProjectBOService,
    private _errorService: ErrorService ) {
  }

  ngOnInit() {

    this._dataService.getTables(this._businessObject.selectedProject.ProjectId)
    .subscribe(( data: Table[]) => {
        this.tables = data;
    });
  }

  onAddNewTable() {
    // Capture table name
    // Add to table list, disable table/column list until edit is complete
    // Reset column objects

  }

  onAddNewColumn() {
    // Capture column name
    // Add to column list, disable table/column lists until edit complete
  }

  onSelectedTableChange() {
    // Updates selectedTable
    // Retrieve table's columns
  }

  onSelectedColumnChange() {
    // Set updateColumn to selectedColumn
  }

  onSaveChanges() {
    // Create object to send to API
    // Update lists as needed upon return
  }


}
