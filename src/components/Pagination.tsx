import React from 'react'
import { Pagination as PaginationAntd } from 'antd';
import { ITEMS_ON_PAGE } from '../init/constants';
import { useFetchData } from '../hooks/useFetchData';
import { useChangePage } from '../hooks/useChangePage';

export const Pagination = () => {


  const { items, page } = useFetchData()
  const setChangePage = useChangePage()

  return (<PaginationAntd
    style={{ marginTop: 30, marginBottom: 30 }}
    pageSize={ITEMS_ON_PAGE}
    showSizeChanger={false}
    total={items}
    current={page}
    onChange={setChangePage}
  />)
}