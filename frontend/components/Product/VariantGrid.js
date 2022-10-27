import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

export default function VariantGrid({ variant, setVariant, product }) {
  const variantClicked = (vari) => (e) => {
    setVariant(vari);
  };

  return (
    <>
      <Grid container justifyContent="space-evenly" spacing={2}>
        {product instanceof Array &&
        product[0] &&
        product[0].dendels_variants instanceof Array ? (
          product[0].dendels_variants.map((vari) => (
            <Grid item key={vari._id}>
              <Card
                sx={{
                  borderWidth: vari._id === variant.id ? '4px' : '0',
                  borderStyle: 'solid',
                  borderColor: 'orange',
                }}
              >
                <CardActionArea onClick={variantClicked(vari)}>
                  <CardMedia
                    component="img"
                    height="60"
                    image={vari.images[0].url}
                    alt={vari.name}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
}
