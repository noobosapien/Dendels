import { Grid, Typography } from '@mui/material';
import React from 'react';
import ProductCard from '../common/ProductCard';

export default function Promo({ products }) {
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{
          marginTop: '4rem',
          marginBottom: '4rem',
        }}
        spacing={10}
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

        <Grid
          item
          container
          justifyContent="space-evenly"
          alignItems="center"
          spacing={10}
        >
          {/* promo products links */}
          {products instanceof Array &&
            products.map((product) => (
              <Grid item>
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </div>
  );
}
