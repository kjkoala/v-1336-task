import { CHANGE_PAGE, FILTER_CONNECTION, FILTER_DEPARTMENT } from './types';

export function changePage(page: number) {
  return {
    type: CHANGE_PAGE,
    payload: page
  }
}

export function changeConnection(connection: number) {
  return {
    type: FILTER_CONNECTION,
    payload: connection
  }
}

export function changeDepartment(department: string) {
  return {
    type: FILTER_DEPARTMENT,
    payload: department
  }
}