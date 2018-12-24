import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
    {
        path: 'appointments-list',
        loadChildren: './appointment-list/appointment-list.module#AppointmentListModule'
    },
    { path: '', redirectTo: 'appointments-list', pathMatch: 'full' },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
        // FuseSharedModule
    ]
})
export class AppointmentsModule {
}
