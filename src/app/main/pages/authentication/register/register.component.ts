import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ApiUrl, RegisterToasterMessage } from '../../../../../assets/constant/constant';
import { ToasterService } from '../../../../common/services/toaster.service';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class RegisterComponent implements OnInit, OnDestroy {

    registerForm: FormGroup;
    dialogRef: any;
    registerAPI: any = ApiUrl.siteUrl.register;

    maxDate = new Date();

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     * @param {Router} _router
     * @param {ToasterService} _toasterService
     * @param {RegisterService} _registerService
     * @param {MatDialog} _matDialog
     */

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _toasterService: ToasterService,
        public _registerService: RegisterService,
        public _matDialog: MatDialog,
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.registerForm = this._formBuilder.group({
            firstName: ['Ishver', Validators.required],
            lastName: ['Nayak', Validators.required],
            email: ['ishver.nayak@viitor.cloud', [Validators.required, Validators.email]],
            gender: ['Male', Validators.required],
            birthDate: ['', Validators.required],
            cb: [false, Validators.required],
        });

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    select(): void {
        // this.selected = value;
        // this.minDate = value;
    }

    /**
     * Terms popup
     */
    termspopup(): void {
        this.dialogRef = this._matDialog.open(TermsConditionsComponent, {
            // panelClass: 'scrumboard-card-dialog',
            data: {
                user_name: ''
            }
        });
        this.dialogRef.afterClosed().subscribe(response => {

        });
    }


    /**
    * register
    */
    register(): void {
        const firstName = this.registerForm.get('firstName').value;
        const lastName = this.registerForm.get('lastName').value;
        const email = this.registerForm.get('email').value;
        const gender = this.registerForm.get('gender').value;
        const birthDate = this.registerForm.get('birthDate').value;
        const registerDATA = {
            'firstName': firstName, 'lastName': lastName, 'email': email, 'gender': gender, 'birthDate': birthDate
        };
        this._registerService.register(this.registerAPI, registerDATA).then((data: any) => {
            if (data.code === 200) {
                this._toasterService.success(RegisterToasterMessage.successRegister);
                this._router.navigate(['/']);
            } else if (data.code === 300) {
                this._toasterService.success(data.message);
            } else {
                // this._toasterService.error(LoginToasterMessage.errorLogin);
            }
        }).catch(err => {
            this._toasterService.error(err.message);
        });
    }

}

