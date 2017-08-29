import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Code } from '../_models/code';
// import { Observable } from 'rxjs/Observable';
import { Template } from '../_models/template';

@Injectable()
export class NextGenDataService {

    // codes: Observable<Code[]>;

    constructor( private http: HttpClient) { }

    getCodes() {

        return this.http
            .get<Code[]>(environment.nextGenAPICodeUrl);

    }

    getTemplates() {

            return this.http
                    .get<Template[]>(environment.nextGenAPITemplateUrl);

            }


}
