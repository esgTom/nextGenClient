import { Component, OnInit, Input } from '@angular/core';
import { ProjectBOService } from '../../_business-objects/project-bo.service';

@Component({
  selector: 'next-gen-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

    @Input() headerText: string;

    constructor(
        private _businessObject: ProjectBOService
    ) { }


    get businessObject() {
        return this._businessObject;
    }

    ngOnInit() {
    }

}
