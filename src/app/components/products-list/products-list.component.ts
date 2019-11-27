import { Component, Inject, OnDestroy } from '@angular/core';
import { ProductTableItemVM } from '../../store/products/products.models';
import { DEMO_FACADE, DemoFacade } from '../../demo/demo';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnDestroy {

  constructor(@Inject(DEMO_FACADE) private productsFacade: DemoFacade) {
  }

  trackByFn(index: number, product: ProductTableItemVM): string {
    return product.storeId;
  }

  ngOnDestroy(): void {
    console.log('ProductsListComponent::ngOnDestroy');
  }

}
