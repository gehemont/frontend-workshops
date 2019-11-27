import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductTableItemVM } from '../store/products/products.models';

export const DEMO_FACADE = new InjectionToken<DemoFacade>('DEMO_FACADE');

export interface DemoFacade {

  products$: Observable<ProductTableItemVM[]>;

  productsCount$: Observable<number>;

  toggleEdit(product: ProductTableItemVM);

  saveProduct(product: ProductTableItemVM, changes: Partial<ProductTableItemVM>);

  cancelProductUpdate(product: ProductTableItemVM);

}
