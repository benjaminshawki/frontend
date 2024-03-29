import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { isPlatformBrowser } from '@angular/common';

import * as ProductActions from './products/store/product.actions';
import * as ShoppingListActions from './shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>, @Inject(PLATFORM_ID) private platformId) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(AuthActions.AUTO_LOGIN());
    }
    this.store.dispatch(ProductActions.FETCH_PRODUCTS());
    this.store.dispatch(ShoppingListActions.FETCH_ORDERS());
  }
}
