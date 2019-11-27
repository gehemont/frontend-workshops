import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApplicationState } from '../../store';
import { ProductTableItemVM } from '../../store/products/products.models';
import { getAllProductsDemo2 } from '../../store/products/demo-2/products.reducer';
import { DemoSharedService } from '../demo.shared.service';

@Injectable({
  providedIn: 'root'
})
export class Demo2Facade {

  products$: Observable<ProductTableItemVM[]> = this.store.select(getAllProductsDemo2)
    .pipe(
      tap(products => console.log('Demo2Facade::products$', products))
    );

  productsCount$: Observable<number> = this.products$
    .pipe(
      map(products => (products || []).length)
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

