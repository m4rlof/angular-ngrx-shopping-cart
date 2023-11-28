import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';


@NgModule({
    declarations: [
        ProductsComponent,

    ],
    exports: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule

    ],
})
export class ProductsModule { }
