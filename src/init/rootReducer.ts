import { combineReducers } from 'redux';

import { tableReducer } from '../reducer/tableReducer'

export const rootReducer = combineReducers({
  tableReducer
})

export type AppState = ReturnType<typeof rootReducer>