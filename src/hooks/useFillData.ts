import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fillData } from '../init/actions';
import { ITEMS_ON_PAGE } from '../init/constants';
import { tableReducerState } from '../init/types'
import { useConnection } from './useConnection';
import { useDepartment } from './useDepartment';
import { useFetchData } from './useFetchData'


export const useFillData = (data: tableReducerState[]) => {
  const setConnection = useConnection()
  const setDepartament = useDepartment()
  const dispatch = useDispatch()
  const { page, filter_connection, filter_department } = useFetchData()
  let departments: string[] = []
  data.forEach(band => {
    if (!departments.includes(band.department.name)) {
      departments.push(band.department.name)
    }
  })

  const row: tableReducerState[] = []
  for (let i = 0; i < data.length; i++) {
    if (filter_department && filter_connection > -1) {
      if (data[i].department.name === filter_department && data[i].connection_state === filter_connection) row.push(data[i])
    } else if (filter_department) {
      if (data[i].department.name === filter_department) row.push(data[i])
    } else if (filter_connection > -1) {
      if (data[i].connection_state === filter_connection) row.push(data[i])
    } else {
      row.push(data[i])
    }
  }
  if (filter_department !== '') {
    localStorage.setItem('department', filter_department)
  }

  if (filter_connection > -1) {
    localStorage.setItem('connection', filter_connection.toString())
  }

  useEffect(() => {
    const departament = localStorage.getItem('department')
    const connection = localStorage.getItem('connection')
    if (departament) {
      setDepartament(departament)
    }
    if (connection) {
      setConnection(parseInt(connection))
    }
  }, [])

  useEffect(() => {
    dispatch(fillData({ data: row.slice((page - 1) * ITEMS_ON_PAGE, page * ITEMS_ON_PAGE), departments, items: row.length }))
  }, [dispatch, filter_department, filter_connection, page])
}