import { NgModule } from '@angular/core';
import {
    MatPaginatorModule, MatTableModule, MatSortModule,
    MatIconModule, MatSelectModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatTooltipModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { AppointmentInspectComponent } from './appointment-inspect.component';

@NgModule({
    declarations: [
        AppointmentInspectComponent
    ],
    imports: [
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
    entryComponents: [AppointmentInspectComponent],
    providers: [],
})
export class AppointmentInspectModule { }
