import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../../store/products/products.models';
import { DemoSharedService } from '../demo.shared.service';
import { DemoFacade } from '../demo';
import { getAllProductsDemo1 } from '../../store/products/demo-1/products.reducer';

@Injectable()
export class Demo1Facade implements DemoFacade, OnDestroy {

  // private isDestroyed$: Subject<void> = new Subject<void>();

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProductsDemo1)
    .pipe(
      tap(products => console.log('Demo1Facade::products$', products)),
      // map(products => cloneDeep(products)) // bug - breaks references
      shareReplay(1),
      // takeUntil(this.isDestroyed$)
    );

  productsCount$: Observable<number> = this.products$
    .pipe(
      map(products => (products || []).length),
      shareReplay(1)
    );

  constructor(
    private store: Store<ApplicationState>,
    private _demoSharedService: DemoSharedService
  ) {
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
