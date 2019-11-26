import { ProductsTableStateDemo3 } from './products/demo-3/products-demo3.reducer';
import { ProductsTableStateDemo2 } from './products/demo-2/products.reducer';
import { ProductsTableStateDemo1 } from './products/demo-1/products.reducer';

export interface ApplicationState {
  productsDemo1: ProductsTableStateDemo1;
  productsDemo2: ProductsTableStateDemo2;
  productsDemo3: ProductsTableStateDemo3;
}
