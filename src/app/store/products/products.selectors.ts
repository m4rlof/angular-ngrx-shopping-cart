import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from 'src/app/models/product/product.model';


export const selectProducts = createFeatureSelector<Product[] | null>('products');