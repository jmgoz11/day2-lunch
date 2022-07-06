import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromCounter from './reducers/counter.reducer';

export const FEATURE_NAME = 'Redux Feature';

export interface ReduxDemoState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<ReduxDemoState> = {
  counter: fromCounter.reducer,
};

// 1. Create a feature selector
//    - how do I get to "this part" ('Redux Feature') in the application state.
const selectFeature = createFeatureSelector<ReduxDemoState>(FEATURE_NAME);

// 2. Create a selector for each property on the state in this feature.
//    - so, we will need a function that knows how to get to the 'counter' portion of this feature.
const selectCounterBranch = createSelector(selectFeature, (f) => f.counter);
// 3. (optiona) any "helpers" (more on this in a bit)

// 4. What the components need.
//    - we will need a selector that knows how to return the "current" property to the redux-demo component.
export const selectCounterCurrentValue = createSelector(
  selectCounterBranch,
  (b) => b.current
);

export const selectCounterCountingBy = createSelector(
  selectCounterBranch,
  (b) => b.by
);
