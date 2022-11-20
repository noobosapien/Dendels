import { Grid, Typography } from '@mui/material';
import React from 'react';
import BundlePageCard from '../../components/Bundles/BundlePageCard';
import Layout from '../../components/Layout';

export default function Bundles({ bundles }) {
  return (
    <>
      <Layout>
        <Grid
          container
          alignItems="center"
          spacing={10}
          justifyContent="space-evenly"
          direction="column"
          sx={{}}
        >
          <Grid item alignSelf="center">
            <Typography variant="h3">All The Bundles</Typography>
          </Grid>

          <Grid item xs={12} />

          {bundles instanceof Array ? (
            bundles.map((bundle) => {
              return (
                <Grid item>
                  <BundlePageCard bundle={bundle} />
                </Grid>
              );
            })
          ) : (
            <></>
          )}
        </Grid>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(process.env.STRAPI_BASE + 'dendels-bundles');
    const bundles = await res.json();

    return {
      props: {
        bundles,
      },
    };
  } catch (e) {}
}
