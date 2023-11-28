import { Component, Input } from "@angular/core";


@Component({
    selector: 'ds-nav-item',
    templateUrl: './ds-nav-item.component.html',
    styleUrls: ['./ds-nav-item.component.sass']
})
export class DsNavItemComponent {
    @Input() path: string = '';
}