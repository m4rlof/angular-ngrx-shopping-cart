import { Component, Input } from "@angular/core";
import { DsNavItem, DsNavMenuDirection } from "src/app/models/design-system/ds-nav.model";


@Component({
    selector: 'ds-nav-menu',
    templateUrl: './ds-nav-menu.component.html',
    styleUrls: ['./ds-nav-menu.component.sass']
})

export class DsNavMenuComponent {
    @Input() navItems: DsNavItem[] = [];
    @Input() direction: DsNavMenuDirection = DsNavMenuDirection.horizontal;
}