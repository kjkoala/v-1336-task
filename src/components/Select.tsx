import React from 'react'
import { Select as SelectAntd } from 'antd'
import DeleteOutlined from '@ant-design/icons/DeleteOutlined'


import { useFetchData } from '../hooks/useFetchData'
import { useDepartment } from '../hooks/useDepartment'
import { useConnection } from '../hooks/useConnection'

export const Select = () => {
  const { Option } = SelectAntd;
  const { departments, filter_connection, filter_department } = useFetchData()
  const setDeparment = useDepartment()
  const setConnection = useConnection()

  return (<div style={{marginTop: 30, marginBottom: 15}}>
    <SelectAntd
      placeholder="Этап подключения"
      value={filter_connection}
      onChange={setConnection}
      style={{ width: 240, marginRight: 15 }}
    >
      <Option disabled value={-1}>Этап подключения</Option>
      <Option value={1}>Подключено</Option>
      <Option value={0}>Отключено</Option>
    </SelectAntd>
    <DeleteOutlined
      onClick={() => {
        setConnection(-1)
        localStorage.removeItem('connection')
      }}
      title="Удалить этап подключения"
      style={{
        cursor: filter_connection === -1 ? 'default' : 'pointer',
        opacity: filter_connection === -1 ? 0.2 : 1
      }}
    />
    <SelectAntd
      style={{ width: 240, marginLeft: 35, marginRight: 15 }}
      onChange={setDeparment}
      value={filter_department}
    >
      <Option disabled value="">Выберите подразделение</Option>
      {departments.map((dep) => (<Option key={dep} value={dep}>{dep}</Option>))}
    </SelectAntd>
    <DeleteOutlined
      onClick={() => {
        setDeparment('')
        localStorage.removeItem('department')
      }}
      title="Удалить выбранное подазделение"
      style={{
        cursor: filter_department === '' ? 'default' : 'pointer',
        opacity: filter_department === '' ? 0.2 : 1
      }}
    />
  </div>)
}