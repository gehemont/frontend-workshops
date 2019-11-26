import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { getContextProductsKey } from '../../store/products/demo-3/products-demo3.reducer';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../../store/products/products.models';
import { Demo3Facade } from '../demo3/demo3.facade';
import { getAllProductsDemo2 } from '../../store/products/demo-2/products.reducer';

@Injectable({
  providedIn: 'root'
})
export class Demo2Facade extends Demo3Facade {

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProductsDemo2)
    .pipe(
      tap(products => console.log('Demo2Facade::products$', products))
    );

  constructor(store: Store<ApplicationState>) {
    super(store);
  }
}

