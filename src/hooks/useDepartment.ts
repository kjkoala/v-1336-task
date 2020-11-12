import { useDispatch } from 'react-redux'
import { changeDepartment } from '../init/actions'

export const useDepartment = () => {
  const dispatch = useDispatch()
  return (department: string) => {
    dispatch(changeDepartment(department))
  }
}