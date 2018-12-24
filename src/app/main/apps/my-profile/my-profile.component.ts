import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants, ApiUrl, ProfileToasterMessage, GeneralError } from '../../../../assets/constant/constant';
import { ToasterService } from '../../../common/services/toaster.service';
import { MyProfileService } from './my-profile.service';
import { ToolbarService } from '../../../layout/components/toolbar/toolbar.service';


@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

    profileForm: FormGroup;
    profileAPI: any = ApiUrl.siteUrl.profile;
    user_info: any;
    admin_type_formats: any = Constants.admin_type_formats;
    adminstatus: any = Constants.status;
    maxDate = new Date();

    email: any;
    firstName: any;
    lastName: any;
    birthDate: any;
    gender: any;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     * @param {ToasterService} _toasterService
     * @param {MyProfileService} _myProfileService
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _toasterService: ToasterService,
        private _myProfileService: MyProfileService,
        private _toolbarService: ToolbarService,
    ) {

    }


    /**
     * On init
     */
    ngOnInit(): void {

        if (localStorage.getItem('user_info') && localStorage.getItem('user_info') !== null) {
            this.user_info = JSON.parse(localStorage.getItem('user_info'));
            this.firstName = this.user_info.firstName;
            this.lastName = this.user_info.lastName;
            this.email = this.user_info.email;
            this.birthDate = this.user_info.birthDate;
            this.gender = this.user_info.gender;
        }

        this.profileForm = this._formBuilder.group({
            firstName: [this.firstName, [Validators.required]],
            lastName: [this.lastName, [Validators.required]],
            email: [this.email, [Validators.required, Validators.email]],
            birthDate: [this.birthDate, [Validators.required]],
            gender: [this.gender, [Validators.required]],
        });
    }

    /**
    * myProfile
    */
    myProfile(): void {
        const profileDATA = {
            'firstName': this.profileForm.get('firstName').value, 'lastName': this.profileForm.get('lastName').value,
            'email': this.profileForm.get('email').value, 'birthDate': this.profileForm.get('birthDate').value, 'gender': this.profileForm.get('gender').value
        };
        this._myProfileService.myProfile(this.profileAPI, profileDATA).then((data: any) => {
            if (data.code === 200) {
                this._toolbarService.setUserName();
                this._toasterService.success(ProfileToasterMessage.profileUpdate);
            } else if (data.code === 300) {
                this._toasterService.success(data.message);
            } else {
                this._toasterService.error(GeneralError.somethingWentWrong);
            }
        }).catch(err => {
            this._toasterService.error(err.message);
        });
    }
}
