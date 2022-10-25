import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Promo() {
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{
          marginTop: '2rem',
        }}
      >
        <Grid item>
          <Typography variant="h5">Special promo products</Typography>
        </Grid>

        <Grid item container>
          {/* promo products links */}
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </div>
  );
}
