import React, { useState } from 'react';
import { Toolbar } from '@mui/material';
import SearchComponent from '../../components/SearchComponent';
import TableComponent from '../../components/TableComponent';

const Home: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Toolbar />
      <SearchComponent value={search} onChange={(e) => {setSearch(e.target.value)}} />
      <TableComponent search={search} />
    </>
  );
}

export default Home;