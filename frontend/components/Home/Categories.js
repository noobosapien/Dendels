import { Grid, Typography } from '@mui/material';
import React from 'react';
import Accesories from '../../public/accesories.jpg';
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
            <CategoryCard imgSrc={Accesories.src} text={'Accesories'} />
          </Grid>
          <Grid item>
            <CategoryCard
              imgSrc={Straightners.src}
              text={'Hair Straightners'}
            />
          </Grid>
          <Grid item>
            <CategoryCard imgSrc={HairRemoval.src} text={'Hair Removal'} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
