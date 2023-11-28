import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartActions } from 'src/app/store/cart/cart.actions';
import { selectCartProducts } from 'src/app/store/cart/cart.selector';


@Component({
    selector: 'checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.sass']
})


export class CheckoutComponent {

}
