import React, { useEffect } from 'react'
import { idText } from 'typescript'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../init/rootReducer';
import { TableState } from '../init/types'

export const useFetchData = () => {
  const dispatch = useDispatch();
  console.log(useSelector<AppState, TableState>(state => state.tableReducer))
}