import { Component, OnInit } from '@angular/core';
import { Table } from '../../_models/table';
import { Column } from '../../_models/column';

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

  constructor() {

    // Fetch tables and it's columns in resolver
    // load lists here

  }

  ngOnInit() {
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
