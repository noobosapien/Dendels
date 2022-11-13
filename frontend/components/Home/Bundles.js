import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import BundleCard from '../common/BundleCard';

export default function Bundles() {
  return (
    <div style={{ marginBottom: '10rem' }}>
      <Grid container direction="column" alignItems="center" spacing={10}>
        <Grid item>
          <Typography variant="h5">Most Popular Bundles</Typography>
        </Grid>

        <Grid item container justifyContent="space-evenly" spacing={6}>
          <Grid item>
            <BundleCard />
          </Grid>
          <Grid item>
            <BundleCard />
          </Grid>
          <Grid item>
            <BundleCard />
          </Grid>
        </Grid>

        <Grid item>
          <Button variant="outlined">View All</Button>
        </Grid>
      </Grid>
    </div>
  );
}
