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
          marginTop: '4rem',
        }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <Typography
              variant="h5"
              sx={{ fontWeight: '300', fontSize: '1.4rem' }}
            >
              Products on special promo
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              sx={{ marginLeft: '4rem', fontWeight: '500', fontSize: '1.4rem' }}
            >
              Have a look at our featured products.
            </Typography>
          </Grid>
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
