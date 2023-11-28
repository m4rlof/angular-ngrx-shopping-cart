import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable } from "rxjs";
import { DsButtonType } from "src/app/models/design-system/ds-button.model";
import { Product } from "src/app/models/product/product.model";


@Component({
    selector: 'ds-cart-item',
    templateUrl: './ds-cart-item.component.html',
    styleUrls: ['./ds-cart-item.component.sass']
})

export class DsCartItemComponent {
    @Input() products: Product[] | null = null;
    @Output() removeHandler: EventEmitter<any> = new EventEmitter();
    public buttonType = DsButtonType.link

    constructor() { }

    onRemove(event: any) {
        this.removeHandler.emit(event);
    }
}