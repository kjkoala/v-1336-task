import { useDispatch } from 'react-redux'
import { changeConnection } from '../init/actions'

export const useConnection = () => {
  const dispatch = useDispatch()
  return (status: number) => {
    dispatch(changeConnection(status))
  }
}