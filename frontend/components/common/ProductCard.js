import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useRouter } from 'next/router';
import { Store } from '../../utils/store';
import { getProductInfo } from '../../helpers/getProductInfo';
import Message from './Message';

export default function ProductCard({ product }) {
  const { state, dispatch } = useContext(Store);
  const [update, setUpdate] = useState(1);
  const [openMessage, setOpenMessage] = useState(false);

  const router = useRouter();

  const prod = {};

  if (product) {
    prod.id = product.id ? product.id : '';
    prod.img = product.image && product.image ? product.image.url : '';
    prod.name = product.name ? product.name : 'Name';
    prod.price = product.lowPrice ? product.lowPrice : '0';
    prod.slug = product.slug ? product.slug : '';
    prod.noOfReviews = product.noofreviews ? product.noofreviews : 0;
    prod.rating = product.rating ? product.rating : 0;
    prod.quantity = product.quantity ? Number(product.quantity) : 1;
    prod.stock = product.stock ? Number(product.stock) : 0;
  }

  useEffect(() => {
    const updateReviews = async () => {
      const info = await getProductInfo(prod.id);
      // prod.noOfReviews =
      //   info instanceof Array && info[0].noofreviews ? info[0].noofreviews : 0;
      // prod.rating =
      //   info instanceof Array && info[0].rating ? info[0].rating : 0;

      setUpdate(update + 1);
    };
    updateReviews();
  }, []);

  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));

  const imgWidth = matchesXS
    ? '10rem'
    : matchesSM
    ? '15rem'
    : matchesMD
    ? '20rem'
    : matchesLG
    ? '25rem'
    : matchesXL
    ? '25rem'
    : '25rem';

  const ImageButton = styled(Fab)(({ theme }) => ({
    // borderRadius: '50px',
  }));

  const handleGotoProduct = (slug) => (e) => {
    router.push(`/product/${slug}`);
  };

  const handleAddToCart = async (e) => {
    const existItem = state.cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...prod, quantity },
    });

    setOpenMessage(true);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Card sx={{ width: imgWidth }} elevation={5}>
          <CardActionArea onClick={handleGotoProduct(prod.slug)}>
            <CardMedia component="img" image={prod.img} alt="item" />

            <CardContent>
              <Grid
                container
                justifyContent="center"
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    variant="body2"
                    sx={(theme) => ({
                      fontWeight: '300',
                      fontSize: '1.0rem',
                      color: theme.palette.common.lightGray,
                    })}
                  >
                    {prod.name}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item>
        <Message
          text={`Added ${prod.name} to the bag!`}
          severity="success"
          open={openMessage}
          setOpen={setOpenMessage}
        />
      </Grid>
    </Grid>
  );
}
