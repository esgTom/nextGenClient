import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Code } from '../_models/code';
import { Template } from '../_models/template';
import { NextGenDataService } from '../services/next-gen-data.service';
import { Table } from '../_models/table';
import { GeneratedCode } from '../_models/generated-code';
import { ProjectBOService } from '../_business-objects/project-bo.service';
import { ErrorService } from '../_core/error-service.service';

@Component({
  selector: 'next-gen-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent implements OnInit, OnDestroy {

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _dataService: NextGenDataService,
        private _businessObject: ProjectBOService,
        private _errorService: ErrorService ) { }

    // Properties
    get businessObject() {
        return this._businessObject;
    }

    codes: Code[] = null;
    templates: Template[] = null;
    tables: Table[] = null;

    generatedCode: string = null;
    selectedTemplate: Template = null;
    selectedTableId: Number = null;


  ngOnInit() {

    // if ( this._businessObject.selectedProject !== null ) {
    //     const projectId = this._route.queryParams.subscribe( params => {
    //         this._businessObject.selectedProject.ProjectId = params['id'];
    //     });
    //     if ( projectId ) {
    //         this._businessObject.selectedProject.ProjectId = +projectId;
    //     }

    // }

        // this._route.data
        //     .subscribe((data: { codes: Code[] }) => {
        //         this.codes = data.codes;
        // });

        this._dataService.getTemplates()
            .subscribe(( data: Template[]) => {
                this.templates = data;
        });

        this._dataService.getTables(this._businessObject.selectedProject.ProjectId)
            .subscribe(( data: Table[]) => {
                this.tables = data;
        });

    }


    generateCode() {
        const selectedTemplate =  `${this.selectedTemplate.TemplateCategory}-${this.selectedTemplate.TemplateName}`;
        this._dataService.generateCode(selectedTemplate, this.selectedTableId)
            .subscribe(( data: GeneratedCode) => {
                this.generatedCode = data.Code;
        });

    }

    ngOnDestroy() {}

}
