import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CardBG from '../../public/cardbg.png';

export default function BundleCard({ bundle }) {
  function getRand(min, max) {
    return Math.random() * (max - min) + min;
  }

  const router = useRouter();

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (bundle.highPrice) {
      const val =
        ((bundle.highPrice - bundle.lowPrice) * 100) / bundle.highPrice;
      setPercentage(val.toFixed(0));
    }
  }, [bundle]);

  return (
    <>
      <Card
        sx={{
          width: '320px',
          // borderRadius: `${borderOne}% ${borderTwo}% / ${borderThree}% ${borderFour}%`,
          borderImage: `url('${CardBG.src}') 30`,
          borderWidth: '0.5rem',
          borderStyle: 'solid',
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

              <Grid item>
                <Alert severity="warning" icon={false} variant="standard">
                  <AlertTitle>
                    <strong style={{ fontSize: '1rem' }}>
                      {percentage}% OFF
                    </strong>
                  </AlertTitle>
                  Hurry while stock last!
                </Alert>
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
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={(e) => router.push(`/bundles/${bundle.slug}`)}
                >
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
