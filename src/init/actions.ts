import { CHANGE_PAGE, FETCH_DATA, FILL_DATA, FILTER_CONNECTION, FILTER_DEPARTMENT, tableFetchDataAction } from './types';

export function changePage(page: number) {
  return {
    type: CHANGE_PAGE,
    payload: {
      page
    }
  }
}

export function changeConnection(connection: number) {
  return {
    type: FILTER_CONNECTION,
    payload: {
      connection
    }
  }
}

export function changeDepartment(department: string) {
  return {
    type: FILTER_DEPARTMENT,
    payload: {
      department
    }
  }
}

export function fillData(payload: tableFetchDataAction) {
  return {
    type: FILL_DATA,
    payload
  }
}

export function fetchData() {
  return {
    type: FETCH_DATA
  }
}