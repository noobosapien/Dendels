import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import BundleCard from '../common/BundleCard';
import { useRouter } from 'next/router';

export default function Bundles() {
  const router = useRouter();

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
          <Button variant="outlined" onClick={(e) => router.push('/bundles')}>
            View All
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
