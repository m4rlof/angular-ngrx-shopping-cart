import { Component, Input } from "@angular/core";
import { DsButtonType } from "src/app/models/design-system/ds-button.model";
import { Product } from "src/app/models/product/product.model";


@Component({
    selector: 'ds-product-item',
    templateUrl: './ds-product-item.component.html',
    styleUrls: ['./ds-product-item.component.sass']
})

export class DsProductItemComponent {
    @Input() product: Product | null = null;
}