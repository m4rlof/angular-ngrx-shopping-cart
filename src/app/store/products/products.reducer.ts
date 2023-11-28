import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product/product.model';
import { ProductsActions } from './products.actions';

export const initialState: Array<Product> = [];

export const productReducer = createReducer(initialState,
    on(ProductsActions.addProduct, (state, { product }) => {
        if (state.some(p => p.id === product.id)) return state;
        return [...state, product];
    }),
    on(ProductsActions.getProducts, (_state, { products }) => products)
)