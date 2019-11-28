import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../../store/products/products.models';
import { DemoSharedService } from '../demo.shared.service';
import { DemoFacade } from '../demo';
import { getAllProductsDemo1 } from '../../store/products/demo-1/products.reducer';

@Injectable({
  providedIn: 'root'
})
export class Demo1Facade implements DemoFacade, OnDestroy {

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProductsDemo1)
    .pipe(
      tap(products => console.log('Demo1Facade::products$', products)),
    );

  productsCount$: Observable<number> = this.store.select(getAllProductsDemo1)
  // productsCount$: Observable<number> = this.products$
    .pipe(
      map(products => (products || []).length),
      shareReplay(1)
    );

  constructor(
    private store: Store<ApplicationState>,
    private _demoSharedService: DemoSharedService
  ) {
    // console.log('Demo1Facade::constructor');
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
    // this.isDestroyed$.next();
    console.log('Demo1Facade::ngOnDestroy');
  }

}
