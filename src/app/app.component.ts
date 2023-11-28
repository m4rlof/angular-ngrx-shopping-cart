import { Component } from '@angular/core';
import { DsNavMenuDirection } from './models/design-system/ds-nav.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public menuItems = [
    {
      path: '/back-office',
      label: 'Back Office'
    },
    {
      path: '/products',
      label: 'Products'
    },
    {
      path: '/cart',
      label: 'Cart'
    },
    {
      path: '/checkout',
      label: 'Checkout'
    }
  ]

  public direction = DsNavMenuDirection.horizontal

  constructor() { }

}
