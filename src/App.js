import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { Header, List, Map, PlaceDetails } from './components';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}></Grid>
    </>
  );
};

export default App;
