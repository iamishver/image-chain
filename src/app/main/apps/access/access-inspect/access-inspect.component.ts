import { Component, OnInit, Inject } from '@angular/core';
import { Constants, ApiUrl } from '../../../../../assets/constant/constant';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-access-inspect',
    templateUrl: './access-inspect.component.html',
    styleUrls: ['./access-inspect.component.scss']
})
export class AccessInspectComponent implements OnInit {

    profileAPI: any = ApiUrl.siteUrl.profile;
    user_info: any;
    admin_type_formats: any = Constants.admin_type_formats;
    adminstatus: any = Constants.status;
    appointment_info: any;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public dialogRef: MatDialogRef<AccessInspectComponent>,
        @Inject(MAT_DIALOG_DATA) data,
    ) {
        this.appointment_info = data;
        // console.log('this.appointment_info', this.appointment_info);
    }


    /**
     * On init
     */
    ngOnInit(): void {

    }

    /**
    * closePopup
    */
    closePopup(): void {
        this.dialogRef.close();
    }
}

