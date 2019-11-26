import { PRODUCTS_TABLE, ProductsTableUpdateOne } from '../products.actions';
import { ProductTableItemVM } from '../products.models';

export const productReducerDemo2 = (state: ProductTableItemVM = undefined, action: ProductsTableUpdateOne): ProductTableItemVM => {
  switch (action.type) {
    case PRODUCTS_TABLE.UPDATE_ONE:
      return { ...state, ...action.changes };
    default:
      return state;
  }
};
