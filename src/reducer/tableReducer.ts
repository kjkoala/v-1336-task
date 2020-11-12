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
  filter_connection: -1,
  filter_department: '',
  departments: [],
  items: 0
}

export const tableReducer = (state = initialState, action: TableActionTypes): TableState => {
  switch (action.type) {
    case FILL_DATA:
      return { ...state, data: action.payload.data, departments: action.payload.departments, items: action.payload.items }
    case CHANGE_PAGE:
      return { ...state, page: action.payload.page }
    case FILTER_CONNECTION:
      return { ...state, filter_connection: action.payload.connection, page: 1 }
    case FILTER_DEPARTMENT:
      return { ...state, filter_department: action.payload.department, page: 1 }
  }

  return state;
}