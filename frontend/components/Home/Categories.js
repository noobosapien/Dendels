import { Grid, Typography } from '@mui/material';
import React from 'react';
import Trimmers from '../../public/trimmers.jpg';
import HairRemoval from '../../public/hairremoval.jpg';
import Straightners from '../../public/straightners.jpg';
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <Typography
              variant="h5"
              sx={{ fontWeight: '300', fontSize: '1.4rem' }}
            >
              Don't need the whole bundle?
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              sx={{ marginLeft: '4rem', fontWeight: '500', fontSize: '1.4rem' }}
            >
              Shop individually.
            </Typography>
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-evenly" spacing={4}>
          {/* category links */}

          <Grid item>
            <CategoryCard
              imgSrc={Straightners.src}
              text={'Hair Straightners / Hair Dryers'}
              slug={'straightners'}
            />
          </Grid>
          <Grid item>
            <CategoryCard
              imgSrc={HairRemoval.src}
              text={'Permanent Hair Removal'}
              slug="removal"
            />
          </Grid>
          <Grid item>
            <CategoryCard
              imgSrc={Trimmers.src}
              text={'Hair Trimmers'}
              slug={'trimmers'}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
