import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';


@NgModule({
    declarations: [
        CheckoutComponent
    ],
    exports: [
        CheckoutComponent
    ],
    imports: [
        CommonModule,
        CheckoutRoutingModule,
        SharedModule
    ],
})
export class CheckoutModule { }
