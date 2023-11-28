import { createActionGroup, props } from '@ngrx/store';
import { Product } from 'src/app/models/product/product.model';

export const ProductsActions = createActionGroup({
    source: 'Products',
    events: {
        'Add Product': props<{ product: Product }>(),
        'Get Products': props<{ products: Array<Product> }>()
        // 'Remove Product': props<{ product: string }>(),
    }
})