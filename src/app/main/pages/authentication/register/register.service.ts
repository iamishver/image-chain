import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    user_info: any = [];
    constructor(public _http: HttpClient) { }
    register(registerAPI, userDetail): any {
        return new Promise((resolve, reject) => {
            const param = {
                'params': userDetail
            };
            // const resp =
            // {
            //     code: 200,
            //     message: 'successfully registered',
            //     data: [], error: []
            // };
            // resolve(resp);
            this._http.post(registerAPI, param).subscribe((res: any) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}
