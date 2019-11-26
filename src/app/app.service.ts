import { Injectable } from '@angular/core';
import { ProductTableItemVM } from './store/products/products.models';
import { productsAll, productsDataShort } from './app.data';
import { ProductsTableAddAll, ProductsTableAddOne } from './store/products/products.actions';
import { Store } from '@ngrx/store';
import { ApplicationState } from './store';
import { getContextProductsKey } from './store/products/demo-3/products-demo3.reducer';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private store: Store<ApplicationState>) {
  }

  getNewProduct(): ProductTableItemVM {
    return productsAll[this.getRandomInt(0, productsAll.length)];
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  addNewProduct() {
    const rawProduct = this.getNewProduct();
    const product = { ...rawProduct, storeId: getContextProductsKey(rawProduct) };
    this.store.dispatch(new ProductsTableAddOne(product));
  }

  loadInitData() {
    const products = productsDataShort.map((p: ProductTableItemVM) => {
      return { ...p, storeId: getContextProductsKey(p) };
    });
    this.store.dispatch(new ProductsTableAddAll(products));
  }
}
