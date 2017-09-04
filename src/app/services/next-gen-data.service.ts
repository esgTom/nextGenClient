import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { Code } from '../_models/code';
import { Template } from '../_models/template';
import { Table } from '../_models/table';
import { ColumnMetaDataImport } from '../_models/column-meta-data-import';
import { GeneratedCode } from '../_models/generated-code';

@Injectable()
export class NextGenDataService {

    // codes: Observable<Code[]>;
    // templates: Observable<Template[]>;
    // templates: Template[];

    constructor( private http: HttpClient) { }

    getCodes() {
        return this.http
        .get<Code[]>(environment.nextGenAPICodeUrl);
    }

    getTemplates(): Observable<Template[]> {

        // get returns an observable, which we simple pass back to the caller
        return this.http.get<Template[]>(environment.nextGenAPITemplateUrl);

    }

    getTables(): Observable<Table[]> {

        // get returns an observable, which we simple pass back to the caller
        return this.http.get<Table[]>(environment.nextGenAPITableUrl);

    }

    generateCode( selectedTemplateName: string, selectedTableId: Number): Observable<GeneratedCode> {

        const params = new HttpParams()
            .set('selectedTemplateName', selectedTemplateName)
            .set('selectedTableId', selectedTableId.toString());

        return this.http.get<GeneratedCode>(environment.nextGenAPIGenerateCodeUrl, { params } );

    }

    importMetaData( importColumns: ColumnMetaDataImport[]): Observable<string> {

        return this.http.post<string>(environment.nextGenAPIimportColumnMetaDataUrl, importColumns  );
        // return this.http.post<string>(environment.nextGenAPIimportColumnMetaDataUrl, { importColumns }  )
        //     .subscribe( response => {},
        //         error => {}
        //     );

    }


}
