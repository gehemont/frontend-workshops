import { Injectable } from '@angular/core';
import { ApplicationState, getAllProducts, ProductsTableAddAll, ProductTableItem } from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {

  products$: Observable<ProductTableItem[]> = this.store.select(getAllProducts);

  constructor(private store: Store<ApplicationState>) {
    this.loadInitData();
  }

  loadInitData() {
    this.store.dispatch(new ProductsTableAddAll([
      {
        productId: 159770,
        tabId: 'customer-set-tab',
        name: 'Creative Cloud All Apps',
        status: 'Active',
        isReadonly: false,
        pricelistType: 'Adobe',
        partNumber: undefined,
        priceStatus: 'PriceMissing',
        tenant: {
          id: '0944ef0b-e038-47cf-b7b0-4c3065004fb6',
          name: 'Avengers - Adobe EA',
          currency: 'USD'
        },
        price: {
          id: 11111,
          date: '2019-02-21T23:00:00.000Z',
          value: 666,
          currency: 'USD',
          regionName: undefined
        }
      },
      {
        productId: 159768,
        tabId: 'customer-set-tab',
        name: 'Acrobat Pro DC',
        status: 'Active',
        isReadonly: false,
        pricelistType: 'Adobe',
        partNumber: undefined,
        priceStatus: 'PriceSet',
        tenant: {
          id: '0944ef0b-e038-47cf-b7b0-4c3065004fb6',
          name: 'Avengers - Adobe EA',
          currency: 'USD'
        },
        price: {
          id: 16826629,
          date: '2019-02-21T23:00:00.000Z',
          value: 444,
          currency: 'USD',
          regionName: undefined
        }
      }
    ]));
  }
}
