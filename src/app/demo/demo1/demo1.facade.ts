import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../../store/products/products.models';
import { getAllProductsDemo1 } from '../../store/products/demo-1/products.reducer';
import { DemoService, DemoSharedService } from '../demo.shared.service';

@Injectable({
  providedIn: 'root'
})
export class Demo1Facade implements DemoService {

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProductsDemo1)
    .pipe(
      tap(products => console.log('Demo1Facade::products$', products)),
      // map(products => cloneDeep(products))
      shareReplay(1)
    );

  productsCount$: Observable<number> = this.products$
    .pipe(
      shareReplay(1),
      map(products => (products || []).length)
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

}

