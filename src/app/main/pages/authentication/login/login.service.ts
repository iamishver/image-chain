import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    user_info: any = [];
    constructor(public _http: HttpClient) { }
    login(loginAPI, userDetail): any {
        return new Promise((resolve, reject) => {
            const param = {
                'params': userDetail
            };
            // const res =
            // {
            //     code: 200,
            //     message: 'successfully logged in.',
            //     data: {
            //         'token': 'dhgdfhdfh',
            //         'user': {
            //             'adminType': '2', 'isActive': '1', '_id': '5c0a625447f8b02a2ccb4fd3', 'email': 'ishver.nayak@viitor.cloud', 'username': 'isunayak', 'password': '$2a$10$OFe3uuqRTxyDwY6WII8XBeFaKI37XRp1KKWEDG.kvAsg1WGg9HnQW', 'company': 'viitorcloud', 'emailVerificationToken': 'dlj0aedk9jdxud866gp1bq', 'emailVerificationTokenExpire': '2018-12-07T13:06:44.038Z', '__v': 0, 'resetPasswordExpires': '2018-12-08T09:54:22.256Z', 'resetPasswordToken': 'rmgcky869xegqdkotkaezd', 'token': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblR5cGUiOiIyIiwiaXNBY3RpdmUiOiIxIiwiX2lkIjoiNWMwYTYyNTQ0N2Y4YjAyYTJjY2I0ZmQzIiwiZW1haWwiOiJpc2h2ZXIubmF5YWtAdmlpdG9yLmNsb3VkIiwidXNlcm5hbWUiOiJzb2xhc25raSIsInBhc3N3b3JkIjoiJDJhJDEwJE9GZTN1dXFSVHh5RHdZNldJSThYQmVGYUtJMzdYUnAxS0tXRURHLmt2QXNnMVdHZzlIblFXIiwiY29tcGFueSI6InZpaXRvcmNsb3VkIiwiZW1haWxWZXJpZmljYXRpb25Ub2tlbiI6ImRsajBhZWRrOWpkeHVkODY2Z3AxYnEiLCJlbWFpbFZlcmlmaWNhdGlvblRva2VuRXhwaXJlIjoiMjAxOC0xMi0wN1QxMzowNjo0NC4wMzhaIiwiX192IjowLCJyZXNldFBhc3N3b3JkRXhwaXJlcyI6IjIwMTgtMTItMDhUMDk6NTQ6MjIuMjU2WiIsInJlc2V0UGFzc3dvcmRUb2tlbiI6InJtZ2NreTg2OXhlZ3Fka290a2FlemQiLCJpYXQiOjE1NDQyNTk3NjEsImV4cCI6MTU0NDg2NDU2MX0.agLU2RFTeN2-m5VEwhb4EKKCMt7ruf6Ptg0CG3XmFAQ'
            //         }
            //     },
            //     error: []
            // };
            // this.user_info = res.data.user;
            // this.user_info.token = res.data.token;
            // if (this.user_info !== '') {
            //     localStorage.setItem('user_info', JSON.stringify(this.user_info));
            // }
            // resolve(res);
            this._http.post(loginAPI, param).subscribe((res: any) => {

                if (res.code === 200) {
                    this.user_info = res.data.user;
                    this.user_info.token = res.data.token;
                    if (this.user_info !== '') {
                        localStorage.setItem('user_info', JSON.stringify(this.user_info));
                    }
                    resolve(res);
                } else {
                    resolve(res);
                }
            }, (err) => {
                reject(err);
            });
        });
    }
}
