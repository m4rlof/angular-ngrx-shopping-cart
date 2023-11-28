import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DsButtonSize, DsButtonType } from "src/app/models/design-system/ds-button.model";


@Component({
    selector: 'ds-button',
    templateUrl: './ds-button.component.html',
    styleUrls: ['./ds-button.component.sass']
})
export class DsButtonComponent {
    @Input() size: DsButtonSize = DsButtonSize.small;
    @Input() type: DsButtonType = DsButtonType.button;
    @Output() handleClick: EventEmitter<any> = new EventEmitter();

    constructor() { }

    onClick() {
        this.handleClick.emit();
    }

}