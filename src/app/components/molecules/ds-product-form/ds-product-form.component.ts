import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DsButtonSize, DsButtonType } from 'src/app/models/design-system/ds-button.model';
import { ProductsActions } from 'src/app/store/products/products.actions';


@Component({
    selector: 'ds-product-form',
    templateUrl: './ds-product-form.component.html',
    styleUrls: ['./ds-product-form.component.sass']
})


export class DsProductFormComponent {
    public productForm: FormGroup;
    public buttonType = DsButtonType.button;
    public buttonSize = DsButtonSize.large;
    public submitted = false;

    constructor(private fb: FormBuilder, private store: Store) {
        this.productForm = this.fb.group({
            productName: ['', Validators.required],
            productReference: ['', Validators.required],
            productPrice: [null, Validators.required],
        });
    }

    public registerProduct() {
        this.submitted = true;
        if (this.productForm.valid) {
            const product = {
                id: Math.random(),
                name: this.productForm.get('productName')?.value,
                price: Number(this.productForm.get('productPrice')?.value),
                sku: this.productForm.get('productReference')?.value,

            }
            this.store.dispatch(ProductsActions.addProduct({ product }));
        }
    }

}
