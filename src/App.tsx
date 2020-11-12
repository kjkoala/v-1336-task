import React from 'react';
import data from './json/data.json'

import { Pagination } from './components/Pagination';
import { TableBand } from './components/TableBand';
import { useFillData } from './hooks/useFillData';
import { Select } from './components/Select';

const App = () => {
  useFillData(data) // загрузка бригад в redux
  return (
    <>
      <Select />
      <TableBand />
      <Pagination />
    </>
  );
}

export default App;
