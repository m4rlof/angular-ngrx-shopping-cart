// shared.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DsButtonComponent } from '../components/atoms/ds-button/ds-button.component';
import { DsCardComponent } from '../components/atoms/ds-card/ds-card.component';
import { DsNavItemComponent } from '../components/atoms/ds-nav-item/ds-nav-item.component';
import { DsCartItemComponent } from '../components/molecules/ds-cart-item/ds-cart-item.component';
import { DsCartSideBarComponent } from '../components/molecules/ds-cart-side-bar/ds-cart-side-bar.component';
import { DsNavMenuComponent } from '../components/molecules/ds-nav-menu/ds-nav-menu.component';
import { DsProductFormComponent } from '../components/molecules/ds-product-form/ds-product-form.component';
import { DsProductItemComponent } from '../components/molecules/ds-product-item/ds-product-item.component';
import { DsCartComponent } from '../components/organisms/ds-cart/ds-cart.component';
import { DsProductsComponent } from '../components/organisms/ds-products/ds-products.component';
import { CurrencyFormatterDirective } from '../directives/currency-formatter.directive';

@NgModule({
    declarations: [
        DsCardComponent,
        DsButtonComponent,
        CurrencyFormatterDirective,
        DsNavItemComponent,
        DsNavMenuComponent,
        DsCartSideBarComponent,
        DsCartComponent,
        DsCartItemComponent,
        DsProductsComponent,
        DsProductItemComponent,
        DsProductFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        DsCardComponent,
        DsButtonComponent,
        CurrencyFormatterDirective,
        DsNavItemComponent,
        DsNavMenuComponent,
        RouterModule,
        DsCartSideBarComponent,
        DsCartComponent,
        DsCartItemComponent,
        DsProductsComponent,
        DsProductItemComponent,
        DsProductFormComponent
    ],
})
export class SharedModule { }