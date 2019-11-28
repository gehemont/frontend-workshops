import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, tap } from 'rxjs/operators';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../../store/products/products.models';
import { DemoSharedService } from '../demo.shared.service';
import { DemoFacade } from '../demo';
import { getAllProductsDemo1 } from '../../store/products/demo-1/products.reducer';

@Injectable()
export class Demo1Facade implements DemoFacade {

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProductsDemo1)
    .pipe(
      tap(products => console.log('Demo1Facade::products$', products.length)),
      // shareReplay(1)
    );

  productsCount$: Observable<number> = this.products$
    .pipe(
      filter(products => !!products && products.length > 0),
      map(products => products.length),
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
