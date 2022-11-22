import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

export default function Returns() {
  const router = useRouter();

  return (
    <>
      <Card
        sx={{
          background:
            'linear-gradient(125deg, rgba(255,190,11,0.05) 0%, rgba(234,11,160,0.05) 100%)',
        }}
      >
        <CardContent>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography sx={{ fontSize: '1rem', fontWeight: '500' }}>
                Returns policy in a nutshell:
              </Typography>
            </Grid>
            <Grid item xs={12} />

            <Grid item>
              <Typography sx={{ fontSize: '1rem' }}>
                If you are unhappy with the product, send it back to us with in
                14 days and we will refund you the cost of the product+the
                shipping fees.
              </Typography>
            </Grid>

            <Grid item xs={12} />
            <Grid item alignSelf={'flex-end'}>
              <Button
                size="small"
                variant="outlined"
                onClick={(e) => router.push('/refunds')}
              >
                Read more
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
