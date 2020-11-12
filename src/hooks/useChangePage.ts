import { useDispatch } from 'react-redux'
import { changePage } from '../init/actions'

export const useChangePage = () => {
  const dispatch = useDispatch()
  return (page: number) => {
    dispatch(changePage(page))
  }
}