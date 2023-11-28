import { createActionGroup, props } from '@ngrx/store';
import { Product } from 'src/app/models/product/product.model';

export const CartActions = createActionGroup({
    source: 'Cart',
    events: {
        'Add To Cart': props<{ product: Product }>(),
        'Remove From Cart': props<{ index: number }>(),
        'Get Cart Products': props<{ products: Array<any> }>()
    }
})