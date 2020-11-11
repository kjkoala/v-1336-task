import { Type } from 'typescript';

// State
export type TableState = {
  data: tableReducerState[];
  page: number;
  filter_connection: null | number;
  filter_department: null | string;
}
type tableReducerState = {
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
  page: number;
}

export const FILTER_CONNECTION = 'FILTER_CONNECTION';
type TabletFilterConnectionAction = {
  type: typeof FILTER_CONNECTION;
  connection: number | null;
}

export const FILTER_DEPARTMENT = 'FILTER_DEPARTMENT';
type TabletFilterDepartmentAction = {
  type: typeof FILTER_DEPARTMENT;
  department: string;
}

export const FILL_DATA = 'FIL_DATA';
type TabletFillData = {
  type: typeof FILL_DATA;
  data: tableReducerState[]
}

export type TableActionTypes =
  | TabletChangePageAction
  | TabletFilterConnectionAction
  | TabletFilterDepartmentAction
  | TabletFillData;
