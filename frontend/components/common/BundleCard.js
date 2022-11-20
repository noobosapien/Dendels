import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CardBG from '../../public/cardbg.png';

export default function BundleCard({ bundle }) {
  function getRand(min, max) {
    return Math.random() * (max - min) + min;
  }

  const [borderOne] = useState(getRand(5, 20));
  const [borderTwo] = useState(getRand(5, 20));
  const [borderThree] = useState(getRand(5, 20));
  const [borderFour] = useState(getRand(5, 20));

  return (
    <>
      <Card
        sx={{
          width: '300px',
          borderRadius: `${borderOne}% ${borderTwo}% / ${borderThree}% ${borderFour}%`,
        }}
        elevation={4}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={bundle ? bundle.image.url : CardBG.src}
            alt="Bundle BG"
          />
        </CardActionArea>

        <CardContent>
          <Grid container direction="column" spacing={6}>
            <Grid
              container
              item
              direction="column"
              alignItems="space-evenly"
              spacing={2}
            >
              {/* Name and price */}
              <Grid item>
                <Typography variant="h6">{bundle?.name}</Typography>
              </Grid>

              <Grid container item spacing={6}>
                <Grid item>
                  <Typography variant="h5">Actual worth:</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    <s>${bundle.highPrice.toFixed(2)}</s>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item spacing={6}>
                <Grid item>
                  <Typography variant="h5" sx={{ fontSize: '1.3rem' }}>
                    Bundle Price:{' '}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: '500', fontSize: '1.3rem' }}
                  >
                    ${bundle.lowPrice.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item justifyContent="center" spacing={1}>
              {/* Photo */}
              <Grid item>
                <Typography>Products included:</Typography>
              </Grid>
              <Grid item xs={12} />
              {bundle?.dendels_products instanceof Array &&
                bundle.dendels_products.map((product) => (
                  <Grid item>
                    <Card>
                      <CardMedia
                        component="img"
                        height="80"
                        image={product.image.url}
                        alt="Bundle BG"
                      />
                    </Card>
                  </Grid>
                ))}
            </Grid>
            <Grid container item>
              {/* Description */}
              <Grid item>
                <Typography>{bundle.description}</Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={8}>
              {/* Add to cart */}
              <Grid item xs={12}>
                <Button fullWidth variant="outlined">
                  View Bundle
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
