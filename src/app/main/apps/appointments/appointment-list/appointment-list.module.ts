import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    MatDialogModule, MatPaginatorModule, MatTableModule, MatSortModule,
    MatIconModule, MatSelectModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatTooltipModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { AppointmentListComponent } from './appointment-list.component';
import { AppointmentListService } from './appointment-list.service';
import { AppointmentInspectModule } from '../appointment-inspect/appointment-inspect.module';

const routes: Routes = [
    {
        path: '**',
        component: AppointmentListComponent,
    },
];

@NgModule({
    declarations: [
        AppointmentListComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        AppointmentInspectModule,
        MatDialogModule,
        MatPaginatorModule, MatTableModule, MatSortModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatToolbarModule,
        MatMenuModule,
        FuseSharedModule
    ],
    providers: [AppointmentListService],
})
export class AppointmentListModule { }
