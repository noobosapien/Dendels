import { Grid, Typography } from '@mui/material';
import React from 'react';
import Trimmers from '../../public/trimmers.jpg';
import HairRemoval from '../../public/hairremoval.jpg';
import Straightners from '../../public/straightners.jpg';
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    <div>
      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item>
          <Typography variant="h5">Shop by Category</Typography>
        </Grid>

        <Grid item container justifyContent="space-evenly" spacing={4}>
          {/* category links */}
          <Grid item>
            <CategoryCard
              imgSrc={Trimmers.src}
              text={'Hair Trimmers'}
              slug={'trimmers'}
            />
          </Grid>
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
        </Grid>
      </Grid>
    </div>
  );
}
