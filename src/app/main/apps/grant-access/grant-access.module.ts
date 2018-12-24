import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule, MatButtonModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { GrantAccessComponent } from './grant-access.component';
import { GrantAccessService } from './grant-access.service';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

const routes: Routes = [
    {
        path: '**',
        component: GrantAccessComponent,
    },
];

@NgModule({
    declarations: [
        GrantAccessComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatToolbarModule,
        MatMenuModule,

        FuseSharedModule,
        ZXingScannerModule
    ],
    providers: [GrantAccessService],
})
export class GrantAccessModule { }
