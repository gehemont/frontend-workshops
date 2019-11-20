import { EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';

export type ReducerMapType<ActionTypes, State, Actions> = {
  [P in keyof ActionTypes]: (state: State, action?: Actions) => State
};

// tslint:disable:max-line-length
export function createDefaultReducer<ActionTypes, State, Actions extends Action>(initialState: State, reducersMap: ReducerMapType<ActionTypes, State, Actions>): (s: State, A: Actions) => State {
  return (state: State = initialState, action: Actions): State => {
    const reducer = reducersMap[action.type];
    return reducer ? reducer(state, action) : state;
  };
}

export const getEntityById = (id: string) => (state: EntityState<any>) => state.entities[id];
