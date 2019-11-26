import { Component, OnInit } from '@angular/core';
import { Demo3Facade } from '../../demo/demo3/demo3.facade';
import { ProductTableItemVM } from '../../store/products/products.models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(public productsFacade: Demo3Facade) {
  }

  ngOnInit() {
  }

  trackByFn(index: number, product: ProductTableItemVM): string {
    return product.storeId;
  }

}
