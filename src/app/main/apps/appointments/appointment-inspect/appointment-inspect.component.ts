import { Component, OnInit, Inject } from '@angular/core';
import { Constants, ApiUrl } from '../../../../../assets/constant/constant';
import { Router } from '@angular/router';
import { fuseAnimations } from '../../../../common/services/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-appointment-inspect',
    templateUrl: './appointment-inspect.component.html',
    styleUrls: ['./appointment-inspect.component.scss'],
    animations: fuseAnimations
})
export class AppointmentInspectComponent implements OnInit {

    profileAPI: any = ApiUrl.siteUrl.profile;
    user_info: any;
    admin_type_formats: any = Constants.admin_type_formats;
    adminstatus: any = Constants.status;
    appointment_info: any;

    /**
     * Constructor
     *
     * @param {Router} _router
     */
    constructor(
        public dialogRef: MatDialogRef<AppointmentInspectComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private _router: Router
    ) {
        this.appointment_info = data;
    }


    /**
     * On init
     */
    ngOnInit(): void {
        // console.log('appointment_info', this.appointment_info);
    }

    /**
    * myProfile
    */
    myProfile(): void {
        // const profileDATA = {
        //     'company': this.profileForm.get('company').value, 'first_name': this.profileForm.get('first_name').value, 'last_name': this.profileForm.get('last_name').value,
        //     'email': this.profileForm.get('email').value, 'username': this.profileForm.get('username').value,
        //     'adminType': this.profileForm.get('adminType').value, 'status': this.profileForm.get('status').value
        // };
        // this._myProfileService.myProfile(this.profileAPI, profileDATA).then((data: any) => {
        //     if (data.code === 200) {
        //         this._toasterService.success(ProfileToasterMessage.profileUpdate);
        //     } else {
        //         this._toasterService.error(GeneralError.somethingWentWrong);
        //     }
        // }).catch(err => {
        //     this._toasterService.error(err.message);
        // });
    }

    /**
    * cancelToBack
    */

    cancelToBack(): void {
        this._router.navigate(['/apps/appointments/appointments-list']);
    }

    /**
    * cancelToBack
    */
    closePopup(): void {
        this.dialogRef.close();
    }
}

