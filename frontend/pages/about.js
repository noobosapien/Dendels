import { Grid, Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout';
import { styled } from '@mui/system';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <Grid
        container
        sx={{ minHeight: '100vh' }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4">This page is coming soon...</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
