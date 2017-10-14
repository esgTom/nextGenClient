import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl , FormControlName, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';

import { ErrorService } from '../_core/error-service.service';
import { ProjectBOService } from '../_business-objects/project-bo.service';
import { Project } from '../_models/project';


@Component({
  selector: 'next-gen-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    projectForm: FormGroup;
    modalRef: NgbModalRef;
    modalCloseResult: string;
    modalTitle: string = null;
    private _mode: string = null;

    constructor(
        private _fb: FormBuilder,
        private _route: ActivatedRoute,
        private _router: Router,
        private _modalService: NgbModal,
        private _businessObject: ProjectBOService,
        private _errorService: ErrorService) { }

    // Properties
    get businessObject() {
        return this._businessObject;
    }

    ngOnInit() {
        this.updateProjectUrl();

        this.projectForm = this._fb.group({
            projectName: ['', [Validators.required]],
            projectDescription: ['', [Validators.required, Validators.maxLength(500)]],
        });

    }

    updateProjectUrl() {
        this._router.navigate(['home'], { queryParams: { id: this.businessObject.selectedProject.ProjectId }});
    }

    saveProjectChanges() {

        const projectName = this.projectForm.get('projectName').value;
        const projectDescription = this.projectForm.get('projectDescription').value;
        let editModel: Project = null;

        if ( this._mode === 'add') {
           editModel = new Project(0, projectName, projectDescription);
        } else {
            editModel = this.businessObject.selectedProject;
            editModel.ProjectName = projectName;
            editModel.ProjectDescription = projectDescription;
        }

        this.businessObject.saveChanges(editModel)
            .subscribe( results => {
                this.closeModal();
            }, (error: HttpErrorResponse) => {
                this._errorService.ErrorMessage = error.message;
                console.log(this._errorService.ErrorMessage);
            });
        }

    //
    // MODAL Methods
    //

    open(content, editMode: string ) {

        this.projectForm.reset();
        this._mode = editMode;

        // Configure modal heading
        if (this._mode === 'add') {
            this.modalTitle = `Adding new project`;
        } else {
            this.modalTitle = `Editing project: ${this.businessObject.selectedProject.ProjectName}`;
            this.projectForm.patchValue({
                projectName: this.businessObject.selectedProject.ProjectName,
                projectDescription: this.businessObject.selectedProject.ProjectDescription
            });
        }

        // Configure modal options:  notably - ability to dismiss modal via click off of modal
        const modalOption: NgbModalOptions = {}; // not null!
        modalOption.backdrop = 'static';
        modalOption.keyboard = false;
        modalOption.size = 'lg';

        this.modalRef = this._modalService.open(content, modalOption);

    }

    closeModal() {
        this.modalRef.close();
    }

}
