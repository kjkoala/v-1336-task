import { useSelector } from 'react-redux'
import { AppState } from '../init/rootReducer';
import { TableState } from '../init/types'

export const useFetchData = () => {
  const {
    data,
    departments,
    filter_department,
    filter_connection,
    page,
    items
  } = useSelector<AppState, TableState>(state => state.tableReducer)
  return ({
    data,
    departments,
    filter_department,
    page,
    filter_connection,
    items
  })
}