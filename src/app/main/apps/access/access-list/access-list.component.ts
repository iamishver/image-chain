import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ToasterService } from '../../../../common/services/toaster.service';
import { AccessToasterMessage } from '../../../../../assets/constant/constant';
import { Router } from '@angular/router';
import { AccessInspectComponent } from '../access-inspect/access-inspect.component';

@Component({
    selector: 'app-access-list',
    templateUrl: './access-list.component.html',
    styleUrls: ['./access-list.component.scss']
})

export class AccessListComponent implements OnInit, AfterViewInit {
    dialogRef: any;
    users: UserData[] = [];
    displayedColumns = ['id', 'name', 'Date', 'Status', 'Action'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog, private _toasterService: ToasterService, private _router: Router) {
        // Create 100 users
        // this.users: UserData[] = [];
        for (let i = 1; i <= 100; i++) { this.users.push(createNewUser(i)); }
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.users);
    }


    ngOnInit(): void {

    }

    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ngAfterViewInit(): any {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string): void {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    revokeForAcces(user_index_id): void {
        this.users.splice(user_index_id, 1);
        this._toasterService.success(AccessToasterMessage.revokeUpdate);
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    viewForAcces(row_data): void {
        this.dialogRef = this.dialog.open(AccessInspectComponent, {
            height: 'auto',
            width: '900px',
            data: row_data,
        });

        // this.users.splice(user_index_id, 1);
        // this._toasterService.success(AccessToasterMessage.revokeUpdate);
        // this.dataSource = new MatTableDataSource(this.users);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
    }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {

    const Date = DATES[Math.floor(Math.random() * DATES.length)];
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
        id: id.toString(),
        name: name,
        Date: Date,
        Status: Status[Math.round(Math.random() * (Status.length - 1))],
        Action: ''
    };
}

/** Constants used to fill up our data base. */

const DATES = ['10-20-2018', '11-20-2018', '07-20-2018', '01-20-2018', '12-20-2018', '11-19-2018', '10-26-2018',
    '10-27-2018', '10-28-2018', '01-20-2018', '01-19-2018', '07-20-2018', '05-20-2018', '06-20-2018', '09-20-2018'];

const Status = ['Active', 'In-Active'];
const NAMES = ['Vishal', 'Ishver', 'Deepak', 'Ram', 'Hitesh', 'Robert Laidlaw',
    'Pankaj', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
    id: string;
    name: string;
    Date: string;
    Status: string;
    Action: string;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
