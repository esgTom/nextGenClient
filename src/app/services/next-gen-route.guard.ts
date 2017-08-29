import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/ToPromise';
import { NextGenDataService } from './next-gen-data.service';
import { Code } from '../_models/code';

@Injectable()
export class NextGenRouteCanActivateGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}

@Injectable()
export class NextGenRouteResolveGuard implements Resolve<Code[]> {

  constructor( private dataService: NextGenDataService ) {}

  resolve(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Code[]> {

      return this.dataService.getCodes()
        .toPromise()
        .then(data => {
          if (data) {
            return data;
          } else {
            return null;
          }
        })
        .catch( error => {
          console.log('Codes get error in Codes route resolve guard');
          return null;
        });
  }
}
