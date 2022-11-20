import { useTheme } from '@mui/material/styles';
import { Button, Card, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';

export default function BundlePageCard({ bundle }) {
  const theme = useTheme();
  const router = useRouter();

  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <Card
        elevation={10}
        raised
        sx={{
          width: `${matchesSM ? '80vw' : '300px'}`,
        }}
      >
        <Grid
          container
          spacing={10}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item>
            <Image
              src={bundle?.image?.url}
              width={matchesSM ? 300 : 300}
              height={matchesSM ? 300 : 300}
            />
          </Grid>

          <Grid item>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Typography
                  sx={{
                    fontSize: '1rem',
                  }}
                >
                  {bundle.name}
                </Typography>
              </Grid>

              <Grid item>
                <Typography>{bundle.description}</Typography>
              </Grid>

              <Grid item container spacing={10}>
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: '600',
                    }}
                  >
                    Bundle worth: ${bundle.highPrice.toFixed(2)}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    sx={{
                      fontSize: '1.4rem',
                      fontWeight: '600',
                    }}
                  >
                    Bundle price: ${bundle.lowPrice}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container item justifyContent="space-between" spacing={5}>
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={(e) => router.push(`/bundles/${bundle.slug}`)}
                  >
                    Show more
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined">Add to bag</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
