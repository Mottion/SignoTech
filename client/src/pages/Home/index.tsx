import * as React from 'react';
import { Toolbar } from '@mui/material';
import SearchComponent from '../../components/SearchComponent';
import TableComponent from '../../components/TableComponent';

const Home: React.FC = () => {
  
  return (
    <>
      <Toolbar />
      <SearchComponent />
      <TableComponent />
    </>
  );
}

export default Home;