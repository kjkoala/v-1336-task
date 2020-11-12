import React from 'react'
import { Table, Tag } from 'antd';
import { useFetchData } from '../hooks/useFetchData';

const columns = [
  {
    title: 'Бригада',
    dataIndex: 'brigade_name',
    key: 'brigade_name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Этап подключения',
    dataIndex: 'connection_state',
    key: 'connection_state',
    render: (stage: number) => (
      <>
        {stage ?
          <Tag color="green">
            ПОДКЛЮЧЕНО
          </Tag>
          :
          <Tag color="volcano">
            ОТКЛЮЧЕНО
          </Tag>}
      </>
    ),
  },
  {
    title: 'Отделение',
    dataIndex: 'department',
    key: 'department',
    render: (departament: any) => {
      return departament.name
    }
  },
  {
    title: 'Местоположение',
    key: 'position',
    dataIndex: 'position',
    render: (position: any) => (<>
      {position.field}{' '}
      {position.cluster}{' '}
      {position.well}
    </>)
  }
];


export const TableBand = () => {
  const { data } = useFetchData()
  return (
    <Table pagination={false} columns={columns} dataSource={data} />
  )
}