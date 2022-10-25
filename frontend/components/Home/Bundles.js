import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Bundles() {
  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h5">Bundles</Typography>
        </Grid>

        <Grid item container>
          {/* bundles carousel */}
        </Grid>
      </Grid>
    </div>
  );
}
