import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
    { path: 'dashboards/project', loadChildren: './dashboards/project/project.module#ProjectDashboardModule' },
    { path: 'my-profile', loadChildren: './my-profile/my-profile.module#MyProfileModule' },
    { path: 'access', loadChildren: './access/access.module#AccessModule' },
    { path: 'appointments', loadChildren: './appointments/appointments.module#AppointmentsModule' },
    { path: 'allergy/allergy-list', loadChildren: './allergy/allergy-list/allergy-list.module#AllergyListModule' },
    { path: 'grant-access', loadChildren: './grant-access/grant-access.module#GrantAccessModule' },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule
    ]
})
export class AppsModule {
}
