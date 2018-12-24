import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    MatDialogModule, MatPaginatorModule, MatTableModule, MatSortModule,
    MatIconModule, MatSelectModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatTooltipModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { AccessListComponent } from './access-list.component';
import { AccessListService } from './access-list.service';
import { AccessInspectModule } from '../access-inspect/access-inspect.module';


const routes: Routes = [
    {
        path: '**',
        component: AccessListComponent,
    },
];

@NgModule({
    declarations: [
        AccessListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        AccessInspectModule,
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
    providers: [AccessListService],
})
export class AccessListModule { }
