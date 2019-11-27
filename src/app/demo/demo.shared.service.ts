import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductTableItemVM } from '../store/products/products.models';
import { ApplicationState } from '../store';
import { ProductsTableUpdateOne } from '../store/products/products.actions';

@Injectable({
  providedIn: 'root'
})
export class DemoSharedService implements OnDestroy {

  private _updateProduct: Subject<{ id: string, changes: Partial<ProductTableItemVM> }> =
    new Subject<{ id: string, changes: Partial<ProductTableItemVM> }>();

  private _isDestroyed$: Subject<void> = new Subject<void>();

  constructor(protected store: Store<ApplicationState>) {

    this._updateProduct
      .pipe(takeUntil(this._isDestroyed$))
      .subscribe(({ id, changes }) => {
        this.store.dispatch(new ProductsTableUpdateOne(id, changes));
      });
  }

  toggleEdit(product: ProductTableItemVM) {
    const changes: Partial<ProductTableItemVM> = { editing: !product.editing };
    this._updateProduct.next({ id: product.storeId, changes });
  }

  saveProduct(product: ProductTableItemVM, changes: Partial<ProductTableItemVM>) {
    changes.editing = false;
    this._updateProduct.next({ id: product.storeId, changes });
  }

  cancelProductUpdate(product: ProductTableItemVM) {
    this._updateProduct.next({ id: product.storeId, changes: { editing: false } });
  }

  ngOnDestroy(): void {
    this._isDestroyed$.next();
  }
}

