import { Component, Input } from "@angular/core";
import { DsButtonSize } from "src/app/models/design-system/ds-button.model";


@Component({
    selector: 'ds-cart-side-bar',
    templateUrl: './ds-cart-side-bar.component.html',
    styleUrls: ['./ds-cart-side-bar.component.sass']
})

export class DsCartSideBarComponent {
    @Input() totalPrice: any;
    public buttonSize = DsButtonSize.medium

    constructor() { }

}