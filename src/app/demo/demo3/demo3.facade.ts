import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { getAllProductsDemo3 } from '../../store/products/demo-3/products-demo3.reducer';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../../store/products/products.models';
import { DemoSharedService } from '../demo.shared.service';
import { DemoFacade } from '../demo';

@Injectable({
  providedIn: 'root'
})
export class Demo3Facade implements DemoFacade, OnDestroy {

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProductsDemo3)
    .pipe(
      tap(products => console.log('Demo3Facade::products$', products)),
      // map(products => cloneDeep(products)) // bug - breaks references
    );

  productsCount$: Observable<number> = this.store.select(getAllProductsDemo3)
    .pipe(
      map(products => (products || []).length)
    );

  constructor(
    private store: Store<ApplicationState>,
    private _demoSharedService: DemoSharedService
  ) {
    // console.log('Demo3Facade::constructor');
  }

  toggleEdit(product: ProductTableItemVM) {
    this._demoSharedService.toggleEdit(product);
  }

  saveProduct(product: ProductTableItemVM, changes: Partial<ProductTableItemVM>) {
    this._demoSharedService.saveProduct(product, changes);
  }

  cancelProductUpdate(product: ProductTableItemVM) {
    this._demoSharedService.cancelProductUpdate(product);
  }

  ngOnDestroy(): void {
    console.log('Demo3Facade::ngOnDestroy');
  }
}

