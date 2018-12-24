import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    MatDatepickerModule, MatRadioModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { RegisterComponent } from './register.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';


const routes = [
    {
        path: 'auth/register',
        component: RegisterComponent
    }
];

@NgModule({
    declarations: [
        RegisterComponent,
        TermsConditionsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatDatepickerModule,
        MatRadioModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FuseSharedModule
    ],
    entryComponents: [TermsConditionsComponent],
    bootstrap: [RegisterComponent]
})
export class RegisterModule { }
