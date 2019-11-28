import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, tap } from 'rxjs/operators';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../../store/products/products.models';
import { getAllProductsDemo2 } from '../../store/products/demo-2/products.reducer';
import { DemoSharedService } from '../demo.shared.service';
import { DemoFacade } from '../demo';

@Injectable({
  providedIn: 'root'
})
export class Demo2Facade implements DemoFacade {

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProductsDemo2)
    .pipe(
      tap(products => console.log('Demo2Facade::products$', products.length)),
      shareReplay(1)
    );

  productsCount$: Observable<number> = this.products$
    .pipe(
      filter(products => !!products && products.length > 0),
      map(products => products.length),
    );

  constructor(private store: Store<ApplicationState>, private _demoSharedService: DemoSharedService) {
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

