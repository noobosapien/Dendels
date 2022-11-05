import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

export default function Returns() {
  return (
    <>
      <Card
        sx={{
          background:
            'linear-gradient(125deg, rgba(255,190,11,0.05) 0%, rgba(234,11,160,0.05) 100%)',
        }}
      >
        <CardContent>
          <Grid container>
            <Grid item>
              <Typography>Returns policy in a nutshell:</Typography>
            </Grid>
            <Grid item xs={12} />

            <Grid item>
              <Typography>
                If you are unhappy with the product, send it back to us with in
                7 days and we will refund you the cost of the product+the
                shipping fees.
              </Typography>
            </Grid>

            <Grid item xs={12} />
            <Grid item>
              <Button size="small" variant="outlined">
                Read more
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
