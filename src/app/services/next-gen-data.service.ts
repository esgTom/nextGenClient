import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { environment } from '../../environments/environment';
import { Code } from '../_models/code';
import { Template } from '../_models/template';
import { Table } from '../_models/table';
import { ColumnMetaDataImport } from '../_models/column-meta-data-import';
import { GeneratedCode } from '../_models/generated-code';
import { Project } from '../_models/project';
import { ErrorService } from '../_core/error-service.service';

@Injectable()
export class NextGenDataService {

    projectId: number;
    projects: Project[] = null;

    constructor( private http: HttpClient,
            private errorService: ErrorService) { }

    getCodes() {
        return this.http
        .get<Code[]>(environment.nextGenAPICodeUrl);
    }




    getProjects() {
        return this.http
            .get<Project[]>(environment.nextGenAPIProjectUrl);
    }

    saveProjectChanges(project: Project) {

        return this.http
            .post<Project>(environment.nextGenAPIProjectUrl, project);
    }

    getTemplates(): Observable<Template[]> {

        // get returns an observable, which we simple pass back to the caller
        return this.http.get<Template[]>(environment.nextGenAPITemplateUrl);

    }

    getTables(projectId: number): Observable<Table[]> {

        let params = new HttpParams();
        params = params.set('projectId', projectId.toString());

        // get returns an observable, which we simple pass back to the caller
        return this.http.get<Table[]>(environment.nextGenAPITableUrl, { params: params });

    }

    generateCode( selectedTemplateName: string, selectedTableId: Number): Observable<GeneratedCode> {

        const params = new HttpParams()
            .set('selectedTemplateName', selectedTemplateName)
            .set('selectedTableId', selectedTableId.toString());

        return this.http.get<GeneratedCode>(environment.nextGenAPIGenerateCodeUrl, { params } );

    }

    importMetaData( importColumns: ColumnMetaDataImport[]): Observable<string> {

        return this.http.post<string>(environment.nextGenAPIimportColumnMetaDataUrl, importColumns  );


    }


}
