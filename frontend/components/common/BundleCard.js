import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import CardBG from '../../public/cardbg.png';

export default function BundleCard() {
  return (
    <>
      <Card sx={{ width: '300px' }} elevation={4}>
        <CardActionArea>
          <CardMedia component="img" image={CardBG.src} alt="Bundle BG" />
        </CardActionArea>

        <CardContent>
          <Grid container direction="column" spacing={10}>
            <Grid container item direction="column" alignItems="space-evenly">
              {/* Name and price */}
              <Grid item>
                <Typography>Name</Typography>
              </Grid>

              <Grid container item spacing={10}>
                <Grid item>
                  <Typography>Actual worth:</Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    <s>$10.00</s>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item spacing={10}>
                <Grid item>
                  <Typography>Price: </Typography>
                </Grid>
                <Grid item>
                  <Typography>$8.00</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item justifyContent="center" spacing={10}>
              {/* Photo */}
              <Grid item>
                <Card>
                  <CardMedia
                    component="img"
                    height="45"
                    image={CardBG.src}
                    alt="Bundle BG"
                  />
                </Card>
              </Grid>

              <Grid item>
                <Card elevation={6}>
                  <CardMedia
                    component="img"
                    height="30"
                    image={CardBG.src}
                    alt="Bundle BG"
                  />
                </Card>
              </Grid>

              <Grid item>
                <Card elevation={6}>
                  <CardMedia
                    component="img"
                    height="30"
                    image={CardBG.src}
                    alt="Bundle BG"
                  />
                </Card>
              </Grid>
            </Grid>
            <Grid container item>
              {/* Description */}
              <Grid item>
                <Typography>Description of the product</Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={8}>
              {/* Add to cart */}
              <Grid item>
                <Button variant="outlined">View</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary">
                  Add to cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
