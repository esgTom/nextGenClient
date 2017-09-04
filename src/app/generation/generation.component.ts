import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Code } from '../_models/code';
import { Template } from '../_models/template';
import { NextGenDataService } from '../services/next-gen-data.service';
import { Table } from '../_models/table';
import { GeneratedCode } from '../_models/generated-code';

@Component({
  selector: 'next-gen-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent implements OnInit, OnDestroy {

    codes: Code[] = null;
    templates: Template[] = null;
    tables: Table[] = null;

    generatedCode: string = null;
    selectedTemplateName: string = null;
    selectedTableId: Number = null;


  constructor( private route: ActivatedRoute,
        private router: Router,
      private dataService: NextGenDataService) { }

  ngOnInit() {

        this.route.data
            .subscribe((data: { codes: Code[] }) => {
                this.codes = data.codes;
        });

        this.dataService.getTemplates()
            .subscribe(( data: Template[]) => {
                this.templates = data;
        });

        this.dataService.getTables()
            .subscribe(( data: Table[]) => {
                this.tables = data;
        });

    }


    generateCode() {

        this.dataService.generateCode(this.selectedTemplateName, this.selectedTableId)
            .subscribe(( data: GeneratedCode) => {
                this.generatedCode = data.Code;
        });

    }

    ngOnDestroy() {}

}
