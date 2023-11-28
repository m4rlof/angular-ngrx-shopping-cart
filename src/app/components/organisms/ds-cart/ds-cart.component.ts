import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { CartActions } from "src/app/store/cart/cart.actions";
import { selectCartProducts, selectCartTotalPrice } from "src/app/store/cart/cart.selector";


@Component({
    selector: 'ds-cart',
    templateUrl: './ds-cart.component.html',
    styleUrls: ['./ds-cart.component.sass']
})

export class DsCartComponent {
    public cartProducts$ = this.store.select(selectCartProducts);
    public cartTotalPrice$ = this.store.select(selectCartTotalPrice);
    public cartSize: number = 0;

    constructor(private store: Store) {
        this.cartProducts$.subscribe(res => this.cartSize = res.length)
    }

    removeCartProduct(index: number) {
        this.store.dispatch(CartActions.removeFromCart({ index }));
    }
}