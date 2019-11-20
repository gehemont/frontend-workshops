import {
  getTabContextProductsKey,
  PRODUCTS_TABLE,
  productsInitialState,
  productsReducerMap,
  ProductsTableActions,
  ProductsTableAddAll,
  ProductsTableState,
  ProductTable
} from '../..';
import { createDefaultReducer } from '../../reducers.helpers';

describe('Products Table reducer', () => {

  let state: ProductsTableState;
  const reducer = createDefaultReducer<PRODUCTS_TABLE, ProductsTableState, ProductsTableActions>(productsInitialState, productsReducerMap);

  let products: ProductTable[];

  beforeEach(() => {
    state = { ...productsInitialState };
    products = [
      {
        productId: 159770,
        tabId: 'customer-set-tab',
        name: 'Creative Cloud All Apps',
        status: 'Active',
        isReadonly: false,
        pricelistType: 'Adobe',
        partNumber: undefined,
        priceStatus: 'PriceMissing',
        tenant: {
          id: '0944ef0b-e038-47cf-b7b0-4c3065004fb6',
          name: 'Avengers - Adobe EA',
          currency: 'USD'
        },
        price: {
          id: 11111,
          date: '2019-02-21T23:00:00.000Z',
          value: 666,
          currency: 'USD',
          regionName: undefined
        }
      },
      {
        productId: 159768,
        tabId: 'customer-set-tab',
        name: 'Acrobat Pro DC',
        status: 'Active',
        isReadonly: false,
        pricelistType: 'Adobe',
        partNumber: undefined,
        priceStatus: 'PriceSet',
        tenant: {
          id: '0944ef0b-e038-47cf-b7b0-4c3065004fb6',
          name: 'Avengers - Adobe EA',
          currency: 'USD'
        },
        price: {
          id: 16826629,
          date: '2019-02-21T23:00:00.000Z',
          value: 444,
          currency: 'USD',
          regionName: undefined
        }
      }
    ];
  });
  it('should add products', () => {
    const productId = getTabContextProductsKey(products[0]);
    const action = new ProductsTableAddAll(products);
    const actual = reducer(state, action);
    expect(actual.ids[0]).toEqual(productId);
    expect(actual.entities[productId]).toEqual(products[0]);
  });
});
