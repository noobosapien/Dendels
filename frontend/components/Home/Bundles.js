import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

export default function Bundles() {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h5">Most Popular Bundles</Typography>
        </Grid>

        <Grid item container>
          {/* bundles carousel */}
        </Grid>

        <Grid item>
          <Button variant="outlined">View All</Button>
        </Grid>
      </Grid>
    </div>
  );
}
