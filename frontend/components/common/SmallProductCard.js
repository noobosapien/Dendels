import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function SmallProductCard({ product, small }) {
  const router = useRouter();
  // console.log('Product: ', product);
  const goToProduct = () => {
    router.push(`/product/${product.slug}`);
  };

  return (
    <>
      <Card
        sx={{
          width: small ? 150 : 240,
          background:
            'linear-gradient(125deg, rgba(255,217,112,1) 0%, rgba(255,217,112,1) 100%)',
        }}
      >
        <CardActionArea onClick={goToProduct}>
          <CardMedia
            component="img"
            height={small ? '60' : '140'}
            image={product.image.url}
            alt={product.name}
          />
          <CardContent
            sx={{
              background:
                'linear-gradient(125deg, rgba(234,11,160,1) 0%, rgba(234,11,160,0.87) 100%)',
              borderTopLeftRadius: small ? '40px 60px' : '100px 130px',
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Grid item>
                <Typography
                  textAlign="center"
                  variant={small ? 'body' : 'h5'}
                  sx={{ color: 'white' }}
                >
                  {product.name}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
