import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import BundleCard from '../common/BundleCard';
import { useRouter } from 'next/router';
import CustomButton from './CustomButton';

export default function Bundles({ bundles }) {
  const router = useRouter();

  return (
    <div style={{ marginBottom: '10rem' }}>
      <Grid container direction="column" alignItems="center" spacing={10}>
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <Typography
              variant="h5"
              sx={{ fontWeight: '300', fontSize: '1.4rem' }}
            >
              Most Popular Bundles
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              sx={{ marginLeft: '4rem', fontWeight: '500', fontSize: '1.4rem' }}
            >
              With the best value.
            </Typography>
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-evenly" spacing={6}>
          {bundles instanceof Array &&
            bundles.map((bundle) => (
              <Grid item>
                <BundleCard bundle={bundle} />
              </Grid>
            ))}
        </Grid>

        <Grid item>
          <CustomButton onClick={(e) => router.push('/bundles')}>
            View All Bundles
          </CustomButton>
          {/* <Button variant="outlined" onClick={(e) => router.push('/bundles')}>
            
          </Button> */}
        </Grid>
      </Grid>
    </div>
  );
}
