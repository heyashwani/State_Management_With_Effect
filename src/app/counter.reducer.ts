import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset,saveData } from './counter.actions';

export const customerFeatureKey = 'user';

// export const initialState1:any=[]


export const initialState2:any =0;

export const userReducer = createReducer(
  initialState2,
  
  on(saveData,(state,{array}) => (array))
)

export const counterReducer = createReducer(
  initialState2,
  on(increment, (state) => (state+1)),
  on(decrement, (state) => (state-1)),
  on(reset, (state) => (0)),
)

export function reducer(state:any | undefined, action: Action): any {
  return userReducer(state, action);
}





