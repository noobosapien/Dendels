import { useTheme } from '@mui/material/styles';
import { Button, Card, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import CardBG from '../../public/cardbg.png';

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
          paddingBottom: '2rem',
          borderImage: `url('${CardBG.src}') 30`,
          borderWidth: '0.5rem',
          borderStyle: 'solid',
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

          <Grid item xs={10} sm={8} md={6}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: '500',
                  }}
                >
                  {bundle.name}
                </Typography>
              </Grid>

              <Grid item>
                <Typography>{bundle.description.slice(0, 100)}...</Typography>
              </Grid>

              <Grid item container spacing={5}>
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
                      fontSize: '1.2rem',
                      fontWeight: '600',
                    }}
                  >
                    Bundle price: ${bundle.lowPrice}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container item justifyContent="flex-end" spacing={5}>
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={(e) => router.push(`/bundles/${bundle.slug}`)}
                    fullWidth
                  >
                    View Bundle
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
