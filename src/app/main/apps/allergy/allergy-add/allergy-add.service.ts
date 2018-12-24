import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AllergyAddService {
    user_info: any = [];
    constructor(public _http: HttpClient) { }
    allergyAdd(allergyAddAPI, postData): any {
        return new Promise((resolve, reject) => {
            this._http.post(allergyAddAPI, postData).subscribe((res: any) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}
