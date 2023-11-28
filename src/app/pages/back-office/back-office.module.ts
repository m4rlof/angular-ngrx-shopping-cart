import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DsNavItemComponent } from 'src/app/components/atoms/ds-nav-item/ds-nav-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';


@NgModule({
    declarations: [
        BackOfficeComponent
    ],
    exports: [
        BackOfficeComponent
    ],
    imports: [
        CommonModule,
        BackOfficeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule

    ],
})
export class BackOfficeModule { }
