import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { Project } from '../_models/project';
import { NextGenDataService } from '../services/next-gen-data.service';
import { ErrorService } from '../_core/error-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'next-gen-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    projects: Project[] = new Array<Project>();
    project: Project;

    set selectedProjectId(projectId: number){
        this.nextGenDataService.projectId = projectId;
    }
    get selectedProjectId(){
        return this.nextGenDataService.projectId;
    }


    constructor(private nextGenDataService: NextGenDataService,
        private errorService: ErrorService) { }

    ngOnInit() {

        this.project = new Project(0, '', '');

        this.nextGenDataService.getProjects()
            .subscribe( data => {
                this.projects = data;
            },
            (error: HttpErrorResponse) => {
                this.errorService.ErrorMessage = error.message ;
            }
        );
    }

    addProject() {

        this.project.CreatedBy = environment.userName;
        this.project.ModifiedBy = environment.userName;

        this.nextGenDataService.insertProject(this.project)
        .subscribe( data => {
            this.projects.push(data);
        },
        (error: HttpErrorResponse) => {
            this.errorService.ErrorMessage = error.message ;
        }
    );

    }

}
