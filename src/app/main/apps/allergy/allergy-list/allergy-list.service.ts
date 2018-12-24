import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AllergyListService {
    user_info: any = [];
    constructor(public _http: HttpClient) { }
    allergyList(allergyListAPI): any {
        return new Promise((resolve, reject) => {
            this._http.get(allergyListAPI).subscribe((res: any) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    allergyDelete(allergyDeleteAPI, postData): any {
        return new Promise((resolve, reject) => {
            this._http.post(allergyDeleteAPI, postData).subscribe((res: any) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}
