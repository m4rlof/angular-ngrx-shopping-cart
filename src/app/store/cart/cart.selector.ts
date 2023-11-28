// cart.selector.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from 'src/app/models/product/product.model';

export const selectCartState = createFeatureSelector<Array<Product>>('cartProducts');

export const selectCartProducts = createSelector(
  selectCartState,
  (state: Array<Product>) => state
);

export const selectCartTotalPrice = createSelector(
  selectCartProducts,
  (products: Array<Product>) => {
    return products.reduce((total, product) => total + product.price, 0);
  }
);