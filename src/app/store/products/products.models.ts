import { ProductsTableState } from './products-table/products-table.reducer';
import { ProductsTableFilterState } from './filters/filters.reducer';
import { TabsState } from './tabs/tabs.reducer';

export interface ProductsState {
  products_table: ProductsTableState;
  filters: ProductsTableFilterState;
  tabs: TabsState;
}
