import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { getAllProductsDemo3 } from '../../store/products/demo-3/products-demo3.reducer';
import { ProductsTableUpdateOne } from '../../store/products/products.actions';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../../store/products/products.models';


@Injectable({
  providedIn: 'root'
})
export class Demo3Facade implements OnDestroy {

  private _updateProduct: Subject<{ id: string, changes: Partial<ProductTableItemVM> }> =
    new Subject<{ id: string, changes: Partial<ProductTableItemVM> }>();

  private _isDestroyed$: Subject<void> = new Subject<void>();

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProductsDemo3)
    .pipe(
      tap(prodcuts => console.log('Demo3Facade::products$', prodcuts))
    );

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

