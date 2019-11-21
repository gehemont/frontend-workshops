import { Injectable, OnDestroy } from '@angular/core';
import {
  ApplicationState,
  getAllProducts,
  getTabContextProductsKey,
  ProductsTableAddAll,
  ProductsTableUpdateOne,
  ProductTableItemVM
} from '../store';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade implements OnDestroy {

  private _updateProduct: Subject<{ id: string, changes: Partial<ProductTableItemVM> }> =
    new Subject<{ id: string, changes: Partial<ProductTableItemVM> }>();

  private _isDestroyed$: Subject<void> = new Subject<void>();

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProducts);

  constructor(private store: Store<ApplicationState>) {

    this.loadInitData();

    this._updateProduct
      .pipe(
        takeUntil(this._isDestroyed$)
      )
      .subscribe(({ id, changes }) => {
        this.store.dispatch(new ProductsTableUpdateOne(id, changes));
      });
  }

  toggleEdit(product: ProductTableItemVM) {
    const id = getTabContextProductsKey(product);
    const changes: Partial<ProductTableItemVM> = { editing: !product.editing };
    this._updateProduct.next({ id, changes });
  }

  saveProduct(product: ProductTableItemVM, changes: Partial<ProductTableItemVM>) {
    const id = getTabContextProductsKey(product);
    changes.editing = false;

    this._updateProduct.next({ id, changes });
  }

  cancelProductUpdate(product: ProductTableItemVM) {
    const id = getTabContextProductsKey(product);
    this._updateProduct.next({ id, changes: { editing: false } });
  }

  ngOnDestroy(): void {
    this._isDestroyed$.next();
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

