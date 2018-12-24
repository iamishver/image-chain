import { NgModule } from '@angular/core';
import {
    MatPaginatorModule, MatTableModule, MatSortModule,
    MatIconModule, MatSelectModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatTooltipModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { AccessInspectComponent } from './access-inspect.component';

@NgModule({
    declarations: [
        AccessInspectComponent
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
    entryComponents: [AccessInspectComponent],
})
export class AccessInspectModule { }
