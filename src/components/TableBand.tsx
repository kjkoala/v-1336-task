import React from 'react'

import json from '../json/data.json'


import { Table, Tag } from 'antd';

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

const data = json;
export const TableBand = () => (<Table pagination={false} columns={columns} dataSource={data} />)