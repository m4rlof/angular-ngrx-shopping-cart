import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { DsButtonType } from "src/app/models/design-system/ds-button.model";
import { Product } from "src/app/models/product/product.model";
import { CartActions } from "src/app/store/cart/cart.actions";
import { selectProducts } from "src/app/store/products/products.selectors";

@Component({
    selector: 'ds-products',
    templateUrl: './ds-products.component.html',
    styleUrls: ['./ds-products.component.sass']
})

export class DsProductsComponent {
    public products$ = this.store.select(selectProducts);
    public buttonType = DsButtonType.link;

    constructor(private store: Store) { }

    public addProductToCart(product: Product) {
        this.store.dispatch(CartActions.addToCart({ product }));
    }
}