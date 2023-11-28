import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';



@NgModule({
    declarations: [
        CartComponent,
    ],
    exports: [
        CartComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
})
export class CartModule { }
