import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { ErrorService } from '../_core/error-service.service';
import { ProjectBOService } from '../_business-objects/project-bo.service';


@Component({
  selector: 'next-gen-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _businessObject: ProjectBOService,
        private errorService: ErrorService) { }

    // Properties
    get businessObject() {
        return this._businessObject;
    }

    ngOnInit() {

        // if ( this._businessObject.selectedProject !== null ) {
        //     const projectId = this._route.queryParams.subscribe( params => {
        //         this._businessObject.selectedProject.ProjectId = params['id'];
        //     });
        //     if ( projectId ) {
        //         this._businessObject.selectedProject.ProjectId = +projectId;
        //     }

        // }
    }

    updateProjectUrl() {
        this._router.navigate(['home'], { queryParams: { id: this.businessObject.selectedProject.ProjectId }});
    }

}
