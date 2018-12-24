import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AccessListService {
    user_info: any = [];
    constructor(public _http: HttpClient) { }
    accessList(accessListAPI, userDetail): any {
        return new Promise((resolve, reject) => {
            const param = {
                'params': userDetail
            };
            this._http.post(accessListAPI, param).subscribe((res: any) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}
