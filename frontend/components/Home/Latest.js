import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Latest() {
  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h5">Be the first to buy</Typography>
        </Grid>

        <Grid item container>
          {/* latest products carousel */}
        </Grid>
      </Grid>
    </div>
  );
}
