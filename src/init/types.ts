// State
export type TableState = {
  data: tableReducerState[];
  page: number;
  filter_connection: number;
  filter_department: string;
  departments: string[];
  items: number;
}

export type tableReducerState = {
  id: number;
  brigade_name: string;
  connection_state: number;
  department: Department;
  position: Position;
}

type Department = {
  id: number;
  name: string;
}

type Position = {
  field: string;
  cluster: number;
  well: number;
}

// Actions
export const CHANGE_PAGE = 'CHANGE_PAGE';
type TabletChangePageAction = {
  type: typeof CHANGE_PAGE;
  payload: {
    page: number
  };
}

export const FILTER_CONNECTION = 'FILTER_CONNECTION';
type TabletFilterConnectionAction = {
  type: typeof FILTER_CONNECTION;
  payload: {
    connection: number;
  }
}

export const FILTER_DEPARTMENT = 'FILTER_DEPARTMENT';
export type TabletFilterDepartmentAction = {
  type: typeof FILTER_DEPARTMENT;
  payload: {
    department: string;
  }
}

export const FILL_DATA = 'FILL_DATA';
export type TabletFillData = {
  type: typeof FILL_DATA;
  payload: {
    data: tableReducerState[];
    departments: string[];
    items: number;
  }
}

export const FETCH_DATA = 'FETCH_DATA'
type TableFetchData = {
  type: typeof FETCH_DATA;
}

export type tableFetchDataAction = {
  items: number;
  data: tableReducerState[];
  departments: string[];
}

export type TableActionTypes =
  | TabletChangePageAction
  | TabletFilterConnectionAction
  | TabletFilterDepartmentAction
  | TabletFillData
  | TableFetchData;
