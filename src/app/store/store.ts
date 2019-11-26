import { ProductsTableStateDemo3 } from './products/demo-3/products-demo3.reducer';
import { ProductsTableStateDemo2 } from './products/demo-2/products.reducer';

export interface ApplicationState {
  productsDemo3: ProductsTableStateDemo3;
  productsDemo2: ProductsTableStateDemo2;
}
