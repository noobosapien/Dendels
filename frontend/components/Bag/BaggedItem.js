import {
  Badge,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CardBG from '../../public/cardbg.png';

export default function BaggedItem({ item, removeItemHandler }) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

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
        <Grid item alignSelf="flex-end">
          <IconButton onClick={removeItemHandler}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item container justifyContent="space-between">
          <Grid item>
            {/* <CardActionArea> */}
            <Grid container spacing={2}>
              <Grid item>
                <Badge
                  color="primary"
                  badgeContent={item.quantity}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="138rem"
                    image={item.img}
                    alt={item.name}
                  />
                </Badge>
              </Grid>

              <Grid item alignSelf="center">
                <Grid item>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    {item.name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* </CardActionArea> */}
          </Grid>
        </Grid>

        <Grid item alignSelf="flex-end">
          <Typography variant="body2" sx={{ fontSize: '2rem' }}>
            $ {(item.lowPrice * item.quantity).toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
