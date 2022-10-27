import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';

export default function Reviews({ product }) {
  const theme = useTheme();
  const [reviews, setReviews] = useState([]);

  console.log('Reviews: ', product.dendels_reviews);

  return <></>;
}
