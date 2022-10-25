import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Featured() {
  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h5">Featured products</Typography>
        </Grid>

        <Grid item container>
          {/* promo products links */}
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </div>
  );
}
