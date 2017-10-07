import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { NextGenDataService } from '../services/next-gen-data.service';
import { ErrorService } from '../_core/error-service.service';
import { Project } from '../_models/project';
import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProjectBOService {

  constructor(
    private _dataService: NextGenDataService,
    private _errorService: ErrorService) { }

    // Properties
    private _model = null;
    private _projectId = 0;
    private _projects: Project[] = null;

    get project() {
        if ( this._model === null) {
            this._model = new Project(0, '', '');
        }
        return this._model;
    }

    get projects(){
        return this._projects;
    }

    set selectedProject(project: Project){
        this._model = project;
    }
    get selectedProject() {
        return this._model;
    }

    getBrokenRules() {
        if (this._errorService.ErrorMessage !== null && this._errorService.ErrorMessage.trim().length > 0){
            return this._errorService.ErrorMessage.trim();
        } else {
            return '';
        }
    }

    loadProjects(projectId: number): Observable<Project[]> {
        // Called by route resolve guard to load up business object
        // and set the selected project if a projectId is passed

        if (this._projects !== null && this._projects.length > 0) {
            this.setSelectedProject(projectId);
            return Observable.of(this._projects);
        } else {
            return this._dataService.getProjects()
                .do( data => {
                    this._projects = data;
                    this.setSelectedProject(projectId);
                });
        }

    }

    addProject() {
        this._errorService.ErrorMessage = '';
        this._model.CreatedBy = environment.userName;
        this._model.ModifiedBy = environment.userName;

        this._dataService.insertProject(this._model)
        .subscribe( data => {
            this._projects.push(data);
            this._projectId = data.ProjectId;
            this.setSelectedProject(this._projectId);
        },
        (error: HttpErrorResponse) => {
            this._errorService.ErrorMessage = error.message ;
        });
    }

    setSelectedProject(projectId: number) {
        const matched = this._projects.filter( project => {
            return project.ProjectId === projectId;
        });

        if ( matched && matched.length > 0) { // set to specified project
            this._model = matched[0];

        } else if (this._projects !== null && this._projects.length > 0) { // set to 1st project
            this._model = this._projects[0];
        }
    }

}
