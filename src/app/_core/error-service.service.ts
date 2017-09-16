import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

    _errorMessage = '';

    public set ErrorMessage( errorMessage: string) {
        this._errorMessage = errorMessage;
        console.log(this._errorMessage);
    }
    public get ErrorMessage(): string {
        return this._errorMessage.trim();
    }

  constructor() { }

}
