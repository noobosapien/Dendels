import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Subscribe() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <div
      style={{
        marginTop: '4rem',
        // width: '90vw',
        height: '40vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: matchesMD ? 160 : 250,
          height: matchesMD ? 160 : 250,
          position: 'absolute',
          background:
            'linear-gradient(125deg, rgba(234,11,160,0.1) 0%, rgba(234,11,160,0.2) 100%)',
          top: matchesMD ? '0.25rem' : '0.25rem',
          left: matchesMD ? '0.25rem' : '0.25rem',
          borderRadius: '70% 80% 50% 70%',
        }}
      ></div>
      <Divider />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: '4rem' }}
      >
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: '300' }}>
            We got loads more deals and services coming up
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: '600' }}>
            Consider subscribing to our newsletter!
          </Typography>
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          spacing={2}
          sx={{ marginTop: '2rem' }}
        >
          {/* subscribe */}
          <Grid item xs={10} sm={6} md={4}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} />
          <Grid item>
            <Button variant="outlined" color="primary">
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <div
        style={{
          width: matchesMD ? 200 : 300,
          height: matchesMD ? 160 : 250,
          position: 'absolute',
          background:
            'linear-gradient(125deg, rgba(255,217,112,0.1) 0%, rgba(255,217,112,0.2) 100%)',
          top: matchesMD ? '10rem' : '1rem',
          left: matchesMD ? '8rem' : matchesLG ? '35rem' : '50rem',
          borderRadius: '70% 90% 100% 70%',
          zIndex: '-10',
        }}
      ></div>
    </div>
  );
}
