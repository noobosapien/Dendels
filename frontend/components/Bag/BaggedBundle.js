import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Badge, Card, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import CardBG from '../../public/cardbg.png';

export default function BaggedBundle({ item, removeItemHandler }) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  console.log('Bagged bundle: ', item);

  return (
    <Card
      variant="outlined"
      sx={{
        width: matchesSM ? '18rem' : '30rem',
        borderImage: `url('${CardBG.src}') 30`,
        borderWidth: '0.5rem',
        borderStyle: 'solid',
      }}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between">
          <Grid item />
          <Grid item alignSelf="flex-end">
            <IconButton onClick={removeItemHandler}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" spacing={8}>
          <Grid item>
            {/* Image */}
            <Badge
              color="secondary"
              badgeContent={'Bundle'}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Image src={item.image.url} width={230} height={230} />
            </Badge>
          </Grid>

          <Grid item container justifyContent="center" spacing={2}>
            <Grid item>
              {/* name */}
              <Typography sx={{ fontSize: '1rem' }}>{item.name}</Typography>
            </Grid>

            <Grid item xs={12} />

            <Grid item>
              <Typography>Items included:</Typography>
            </Grid>

            <Grid item container justifyContent="center" spacing={4}>
              {/* variant pics */}
              {item.dendels_variants.map((variant) => (
                <Grid item>
                  <Image src={variant.images[0].url} width={60} height={60} />
                </Grid>
              ))}
            </Grid>

            <Grid item alignSelf="flex-end">
              {/* Price */}
              <Typography variant="body2" sx={{ fontSize: '2rem' }}>
                ${item.lowPrice.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
