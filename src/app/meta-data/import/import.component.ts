import { Component, OnInit } from '@angular/core';
import { ColumnMetaDataImport } from '../../_models/column-meta-data-import';
import { NextGenDataService } from '../../services/next-gen-data.service';


@Component({
  selector: 'next-gen-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

    componentMessages: string = null;
    columnMetaData: string = null;

  constructor(private dataService: NextGenDataService) { }

  ngOnInit() {

  }

  launchImport() {

    const importColumns: ColumnMetaDataImport[] = [];
    let importColumn: ColumnMetaDataImport = null;

    this.componentMessages = null;

    // Parse entered metadata into objects
    if (this.columnMetaData !== null && this.columnMetaData.length > 0) {

        let rows: String[] = this.columnMetaData.split(';');
        rows = rows.splice(0, (rows.length - 1)); // remove last empty row
        rows.forEach(row => {

            const rowColumns = row.split('|');

            importColumn = new ColumnMetaDataImport (
                rowColumns[0].replace(/(\r\n|\n|\r)/gm, ''),
                rowColumns[1],
                rowColumns[2],
                ( rowColumns[3] === 'NULL' ) ? 0 : +rowColumns[3],
                ( rowColumns[4] === 'NULL' ) ? 0 : +rowColumns[4],
                (rowColumns[5] === 'YES' ? true : false),
                ( +rowColumns[6] === 1 ) ? true : false,
                +rowColumns[7],
            );
            importColumns.push(importColumn);
        });

        if ( importColumns !== null && importColumns.length > 0) {

            this.dataService.importMetaData(importColumns)
            .subscribe(response => {
                this.componentMessages = 'metadata data imported successfully';
                this.columnMetaData = null;
            },
            error => {
                this.componentMessages = 'metadata data import failed miserably';
            });

        }


    }


  }

}
