import {
  TableState,
  TableActionTypes,
  CHANGE_PAGE,
  FILTER_CONNECTION,
  FILTER_DEPARTMENT,
  FILL_DATA
} from '../init/types'

const initialState: TableState = {
  data: [],
  page: 1,
  filter_connection: null,
  filter_department: null
}

export const tableReducer = (state = initialState, action: TableActionTypes): TableState => {
  switch (action.type) {
    case FILL_DATA:
      return { ...state, data: action.data }
    case CHANGE_PAGE:
      return { ...state, page: action.page }
    case FILTER_CONNECTION:
      return { ...state, filter_connection: action.connection }
    case FILTER_DEPARTMENT:
      return { ...state, filter_department: action.department }
  }

  return state;
}