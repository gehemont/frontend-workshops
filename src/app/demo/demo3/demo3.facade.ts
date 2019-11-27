import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { getAllProductsDemo3 } from '../../store/products/demo-3/products-demo3.reducer';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../../store/products/products.models';
import { DemoService, DemoSharedService } from '../demo.shared.service';

@Injectable({
  providedIn: 'root'
})
export class Demo3Facade implements DemoService {

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProductsDemo3)
    .pipe(
      tap(products => console.log('Demo3Facade::products$', products)),
      // stupido-1 - breaking references
      // map(products => cloneDeep(products))
      shareReplay(1)
    );

  productsCount$: Observable<number> = this.products$
    .pipe(
      map(products => (products || []).length)
    );

  constructor(
    protected store: Store<ApplicationState>,
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
}

