import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from './products.facade';
import { getTabContextProductsKey, ProductTableItem } from '../store';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  constructor(public productsFacade: ProductsFacade) {
  }

  ngOnInit() {
  }

  trackByFn(index: number, product: ProductTableItem): string {
    return getTabContextProductsKey(product);
  }

}
