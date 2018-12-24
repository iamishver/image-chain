import { Component, OnInit, Inject } from '@angular/core';
import { Constants, ApiUrl, GeneralError, AllergyToasterMessage } from '../../../../../assets/constant/constant';
import { fuseAnimations } from '../../../../common/services/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllergyAddService } from './allergy-add.service';
import { ToasterService } from '../../../../common/services/toaster.service';

@Component({
    selector: 'app-allergy-add',
    templateUrl: './allergy-add.component.html',
    styleUrls: ['./allergy-add.component.scss'],
    animations: fuseAnimations
})

export class AllergyAddComponent implements OnInit {

    allergyTypeList: any = Constants.allergyTypeList;
    occurrenceList: any = Constants.occurrenceList;
    severityList: any = Constants.severityList;
    reactionList: any = Constants.reactionList;
    outcomeList: any = Constants.outcomeList;

    allergyForm: FormGroup;
    maxDate = new Date();

    currentAllergyAPI: any;

    editAllergyAPI: any = ApiUrl.siteUrl.editAllergy;
    addAllergyAPI: any = ApiUrl.siteUrl.addAllergy;

    allergy_info: any;


    type: any;
    name: any;
    outcome: any;
    beginDate: any;
    endDate: any;
    occurrence: any;
    severity: any;
    reaction: any;

    constructor(
        private _allergyAddService: AllergyAddService,
        private _toasterService: ToasterService,
        private _formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AllergyAddComponent>,
        @Inject(MAT_DIALOG_DATA) data,
    ) {
        this.currentAllergyAPI = this.addAllergyAPI;
        this.allergy_info = data;
        if (this.allergy_info) {

            this.currentAllergyAPI = this.editAllergyAPI;

            this.type = Number(this.allergy_info.type);
            this.name = this.allergy_info.name;
            this.outcome = Number(this.allergy_info.outcome);
            if (this.allergy_info.beginDate !== '') {
                this.beginDate = new Date(this.allergy_info.beginDate);
            }
            if (this.allergy_info.endDate !== '') {
                this.endDate = new Date(this.allergy_info.endDate);
            }
            this.occurrence = Number(this.allergy_info.occurrence);
            this.severity = Number(this.allergy_info.severity);
            this.reaction = Number(this.allergy_info.reaction);
        }
    }


    ngOnInit(): void {

        this.allergyForm = this._formBuilder.group({
            type: [this.type, [Validators.required]],
            name: [this.name, [Validators.required]],
            outcome: [this.outcome, [Validators.required]],
            beginDate: [this.beginDate, [Validators.required]],
            endDate: [''],
            occurrence: [this.occurrence, [Validators.required]],
            severity: [this.severity, [Validators.required]],
            reaction: [this.reaction, [Validators.required]],
        });

        if (this.endDate !== '') {
            this.allergyForm.controls['endDate'].setValue(this.endDate);
        }
    }

    /**
    * cancelToBack
    */
    closePopup(): void {
        this.dialogRef.close();
    }


    /**
    * myAllergy
    */
    myAllergy(): void {
        const profileDATA = {
            'params': {
                'index': this.allergy_info.index, 'id': String(this.allergy_info._id), 'type': String(this.allergyForm.get('type').value),
                'name': this.allergyForm.get('name').value, 'outcome': String(this.allergyForm.get('outcome').value),
                'beginDate': this.allergyForm.get('beginDate').value, 'endDate': this.allergyForm.get('endDate').value,
                'occurrence': String(this.allergyForm.get('occurrence').value),
                'severity': String(this.allergyForm.get('severity').value), 'reaction': String(this.allergyForm.get('reaction').value)
            }
        };
        this._allergyAddService.allergyAdd(this.currentAllergyAPI, profileDATA).then((data: any) => {
            if (data.code === 200) {
                this._toasterService.success(AllergyToasterMessage.AllergyUpdate);
                this.dialogRef.close(profileDATA);
            } else {
                this._toasterService.error(GeneralError.somethingWentWrong);
            }
        }).catch(err => {
            this._toasterService.error(err.message);
        });
    }

}
