import { createReducer, on } from '@ngrx/store';
import { CartActions } from './cart.actions';

export const initialState: Array<any> = [];

export const cartReducer = createReducer(initialState,
    on(CartActions.addToCart, (state, { product }) => {
        if (state.indexOf(product.id) > -1) return state;
        return [...state, product];
    }),
    on(CartActions.removeFromCart, (state, { index }) => {
        return state.filter((_, i) => i !== index);
    }),
    on(CartActions.getCartProducts, (_state, { products }) => products)
)