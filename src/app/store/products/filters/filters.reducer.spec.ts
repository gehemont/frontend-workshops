import { Update } from '@ngrx/entity';
import { ProductFilter, ProductsTableFilterAddAll, ProductsTableFilterUpdateMany, ProductsTableFilterUpdateOne } from '../..';
import { createDefaultReducer } from '../../reducers.helpers';
import { PRODUCTS_TABLE_FILTER, ProductsTableFilterActions } from './filters.actions';
import { filtersMap } from './filters-test-data';
import { filtersInitialState, filtersReducerMap, ProductsTableFilterState } from './filters.reducer';

describe('Filters reducer', () => {

  let state: ProductsTableFilterState;
  // tslint:disable:max-line-length
  const reducer = createDefaultReducer<PRODUCTS_TABLE_FILTER, ProductsTableFilterState, ProductsTableFilterActions>(filtersInitialState, filtersReducerMap);
  let filters: ProductFilter[];

  beforeEach(() => {
    state = { ...filtersInitialState };
    filters = Object.values(filtersMap);
  });

  it('should add filters', () => {
    const action = new ProductsTableFilterAddAll(filters);
    const actual = reducer(state, action);
    expect(actual.ids[0]).toEqual(filters[0].id);
    expect(actual.entities[filters[0].id]).toEqual(filters[0]);
  });

  it('should edit single filter', () => {

    state = {
      ids: [filters[0].id],
      entities: {
        [filters[0].id]: filters[0]
      }
    };

    const acceptedValue = {
      key: 'Aws',
      value: 'Aws'
    };

    const filterUpdate: Partial<ProductFilter> = {
      acceptedValues: [
        acceptedValue
      ]
    };

    const updateAction = new ProductsTableFilterUpdateOne(filters[0].id, filterUpdate);
    const actual = reducer(state, updateAction);

    expect(actual.entities[filters[0].id].acceptedValues).toEqual([acceptedValue]);
  });

  it('should edit many filter', () => {

    state = {
      ids: [
        filters[0].id,
        filters[1].id
      ],
      entities: {
        [filters[0].id]: filters[0],
        [filters[1].id]: filters[1]
      }
    };

    const filtersUpdate: Update<ProductFilter>[] = [
      {
        id: filters[0].id,
        changes: {
          isHidden: true,
          isDisabled: true
        }
      },
      {
        id: filters[1].id,
        changes: {
          isHidden: true,
          isDisabled: true
        }
      }
    ];

    const updateAction = new ProductsTableFilterUpdateMany(filtersUpdate);
    const actual = reducer(state, updateAction);

    expect(actual.entities[filters[0].id].isHidden).toEqual(true);
    expect(actual.entities[filters[1].id].isHidden).toEqual(true);

    expect(actual.entities[filters[0].id].isDisabled).toEqual(true);
    expect(actual.entities[filters[1].id].isDisabled).toEqual(true);
  });

});
