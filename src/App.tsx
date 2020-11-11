import React from 'react';

import { Pagination } from './components/Pagination';
import { TableBand } from './components/TableBand';
import { useFetchData } from './hooks/useFetchData';

const App = () => {
  useFetchData()
  return (
    <>
      <TableBand />
      <Pagination />
    </>
  );
}

export default App;
