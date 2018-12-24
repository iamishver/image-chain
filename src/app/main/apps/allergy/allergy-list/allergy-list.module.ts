import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    MatDialogModule, MatPaginatorModule, MatTableModule, MatSortModule,
    MatIconModule, MatSelectModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatTooltipModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { AllergyListComponent } from './allergy-list.component';
import { AllergyListService } from './allergy-list.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AllergyAddModule } from '../allergy-add/allergy-add.module';

const routes: Routes = [
    {
        path: '**',
        component: AllergyListComponent,
    },
];

@NgModule({
    declarations: [
        AllergyListComponent,
        ConfirmationDialogComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        AllergyAddModule,
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
    entryComponents: [ConfirmationDialogComponent],
    providers: [AllergyListService],
})
export class AllergyListModule { }
