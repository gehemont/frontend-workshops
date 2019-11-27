import { Component, Inject } from '@angular/core';
import { ProductTableItemVM } from '../../store/products/products.models';
import { DemoService } from '../../demo/demo.shared.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  constructor(@Inject('ProductsFacade') private productsFacade: DemoService) {
  }

  trackByFn(index: number, product: ProductTableItemVM): string {
    return product.storeId;
  }

}
