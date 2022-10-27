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

export default function SmallProductCard({ product, noReviews }) {
  const router = useRouter();
  // console.log('Product: ', product);
  const goToProduct = () => {
    router.push(`/product/${product.slug}`);
  };

  return (
    <>
      <Card sx={{ width: 140 }}>
        <CardActionArea onClick={goToProduct}>
          <CardMedia
            component="img"
            height="140"
            image={product.image.url}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
