import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../../store/products/products.models';
import { getAllProductsDemo2 } from '../../store/products/demo-2/products.reducer';
import { DemoSharedService } from '../demo.shared.service';
import { DemoFacade } from '../demo';

@Injectable({
  providedIn: 'root'
})
export class Demo2Facade implements DemoFacade, OnDestroy {

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProductsDemo2)
    .pipe(
      tap(products => console.log('Demo2Facade::products$', products)),
      // map(products => cloneDeep(products)) // bug - breaks references
      // shareReplay(1)
    );

  productsCount$: Observable<number> = this.store.select(getAllProductsDemo2)
    .pipe(
      map(products => (products || []).length)
    );

  constructor(private store: Store<ApplicationState>, private _demoSharedService: DemoSharedService) {
    // console.log('Demo2Facade::constructor');
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
    console.log('Demo2Facade::ngOnDestroy');
  }

}

