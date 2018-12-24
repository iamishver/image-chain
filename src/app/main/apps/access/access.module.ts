import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
    {
        path: 'access-list',
        loadChildren: './access-list/access-list.module#AccessListModule'
    },
    { path: '', redirectTo: 'access-list', pathMatch: 'full' },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
        // FuseSharedModule
    ]
})
export class AccessModule {
}
