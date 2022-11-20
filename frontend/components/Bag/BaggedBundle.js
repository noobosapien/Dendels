import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Card, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';

export default function BaggedBundle({ item, removeItemHandler }) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  console.log('Bagged bundle: ', item);

  return (
    <Card variant="outlined" sx={{ width: matchesSM ? '18rem' : '30rem' }}>
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between">
          <Grid item>
            <Typography>Bundle</Typography>
          </Grid>

          <Grid item>
            <IconButton onClick={removeItemHandler}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item>
            {/* Image */}
            <Image src={item.image.url} width={200} height={200} />
          </Grid>

          <Grid item container>
            <Grid item>
              {/* name */}
              <Typography>{item.name}</Typography>
            </Grid>

            <Grid item container>
              {/* variant pics */}
              {item.dendels_variants.map((variant) => (
                <Grid item>
                  <Image src={variant.images[0].url} width={60} height={60} />
                </Grid>
              ))}
            </Grid>

            <Grid item>
              {/* Price */}
              <Typography>${item.lowPrice.toFixed(2)}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
