import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useRouter } from 'next/router';

export default function CategoryCard({ imgSrc, text, slug }) {
  const router = useRouter();

  return (
    <Card sx={{ width: 240, height: 200 }}>
      <CardActionArea onClick={() => router.push(`/category/${slug}`)}>
        <CardMedia component="img" height="140" image={imgSrc} alt="items" />
        <CardContent>
          <Typography
            textAlign="center"
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: '1rem',
            }}
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
