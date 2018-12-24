import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ToasterService } from '../../../../common/services/toaster.service';
import { Constants, ApiUrl, AllergyToasterMessage, GeneralError } from '../../../../../assets/constant/constant';
import { AllergyListService } from './allergy-list.service';
import { AllergyAddComponent } from '../allergy-add/allergy-add.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';


@Component({
    selector: 'app-allergy-list',
    templateUrl: './allergy-list.component.html',
    styleUrls: ['./allergy-list.component.scss']
})
export class AllergyListComponent implements OnInit, AfterViewInit {

    newDataSource: any;


    allergyTypeList: any = Constants.allergyTypeList;
    occurrenceList: any = Constants.occurrenceList;
    severityList: any = Constants.severityList;
    reactionList: any = Constants.reactionList;
    outcomeList: any = Constants.outcomeList;


    AllergyListAPI: any = ApiUrl.siteUrl.getAllergy;
    AllergyDeleteAPI: any = ApiUrl.siteUrl.deleteAllergy;

    dialogRef: any;
    ELEMENT_DATA: Element[] = [];

    displayedColumns = ['name', 'beginDate', 'endDate', 'occurrence', 'outcome', 'reaction', 'severity', 'type', 'Action'];
    dataSource: MatTableDataSource<Element>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog, private _toasterService: ToasterService, private _allergyListService: AllergyListService) {

    }

    ngOnInit(): void {

        this._allergyListService.allergyList(this.AllergyListAPI).then((data: any) => {
            if (data.code === 200) {
                this.newDataSource = data.data;
                this.GridSet();
            } else {
                this._toasterService.error(GeneralError.QUERYEXCEPTION);
            }
        }).catch(err => {
            this._toasterService.error(err.message);
        });
    }

    GridSet(): void {
        this.dataSource = new MatTableDataSource(this.newDataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }


    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ngAfterViewInit(): any {

    }

    applyFilter(filterValue: string): void {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }


    EditForAllergy(row_data, index): void {
        row_data.index = index;
        this.dialogRef = this.dialog.open(AllergyAddComponent, {
            height: 'auto',
            width: '900px',
            data: row_data,
        });
        this.dialogRef.afterClosed().subscribe((profileDATA: any) => {
            if (profileDATA) {
                this.newDataSource[index].type = profileDATA.params.type;
                this.newDataSource[index].name = profileDATA.params.name;
                this.newDataSource[index].outcome = profileDATA.params.outcome;
                this.newDataSource[index].beginDate = profileDATA.params.beginDate;
                this.newDataSource[index].endDate = profileDATA.params.endDate;
                this.newDataSource[index].occurrence = profileDATA.params.occurrence;
                this.newDataSource[index].severity = profileDATA.params.severity;
                this.newDataSource[index].reaction = profileDATA.params.reaction;
                this.GridSet();
            }
        });
    }

    deleteForAllergy(_id, index): void {
        this.dialogRef = this.dialog.open(ConfirmationDialogComponent);
        this.dialogRef.afterClosed().subscribe((isDelete: boolean) => {
            if (isDelete) {
                const patientId = {
                    'params': {
                        'id': _id
                    }
                };
                this._allergyListService.allergyDelete(this.AllergyDeleteAPI, patientId).then((data: any) => {
                    if (data.code === 200) {
                        this.newDataSource.splice(index, 1);
                        this.dataSource = new MatTableDataSource(this.newDataSource);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        this._toasterService.success(AllergyToasterMessage.AllergyDelete);
                    } else {
                        this._toasterService.error(GeneralError.QUERYEXCEPTION);
                    }
                }).catch(err => {
                    this._toasterService.error(err.message);
                });
            }
        });
    }

    /**
    * cancelToBack
    */
    closePopup(): void {
        this.dialogRef.close();
    }

}

export interface Element {
    name: string;
    beginDate: string;
    endDate: string;
    occurrence: string;
    outcome: string;
    reaction: string;
    severity: string;
    type: string;
    Action: string;
}
