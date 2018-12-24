import { NgModule } from '@angular/core';
import {
    MatDatepickerModule, MatIconModule, MatSelectModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatTooltipModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { AllergyAddComponent } from './allergy-add.component';

@NgModule({
    declarations: [
        AllergyAddComponent
    ],
    imports: [
        MatDatepickerModule,
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
    entryComponents: [AllergyAddComponent],
    providers: [],
})
export class AllergyAddModule { }
