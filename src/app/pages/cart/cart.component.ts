import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartProducts } from 'src/app/store/cart/cart.selector';



@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.sass']
})


export class CartComponent {
    public cartProducts$ = this.store.select(selectCartProducts);

    constructor(private store: Store) { }

}
