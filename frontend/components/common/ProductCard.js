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
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useRouter } from 'next/router';
import { Store } from '../../utils/store';
import { getProductInfo } from '../../helpers/getProductInfo';
import Message from './Message';
import CardBG from '../../public/cardbg.png';

export default function ProductCard({ product }) {
  const { state, dispatch } = useContext(Store);
  const [update, setUpdate] = useState(1);
  const [openMessage, setOpenMessage] = useState(false);
  const [sale, setSale] = useState(false);
  const [highPrice, setHighPrice] = useState(0);
  const [lowPrice, setLowPrice] = useState(0);

  const router = useRouter();

  const prod = {};

  if (product) {
    prod.id = product.id ? product.id : '';
    prod.img = product.image && product.image ? product.image.url : '';
    prod.name = product.name ? product.name : 'Name';
    prod.slug = product.slug ? product.slug : '';
    prod.noOfReviews = product.noofreviews ? product.noofreviews : 0;
    prod.rating = product.rating ? product.rating : 0;
    prod.quantity = product.quantity ? Number(product.quantity) : 1;
    prod.stock = product.stock ? Number(product.stock) : 0;
  }

  // console.log(product);

  useEffect(() => {
    product && product.dendels_variants instanceof Array
      ? setLowPrice(product.dendels_variants[0].highPrice)
      : setLowPrice(50000);

    product && product.dendels_variants instanceof Array
      ? product.dendels_variants.forEach((variant) => {
          if (variant.sale) {
            setSale(true);

            if (variant.lowPrice < lowPrice) {
              setLowPrice(variant.lowPrice);
            }

            if (variant.lowPrice > highPrice) {
              setHighPrice(variant.lowPrice);
            }
          } else {
            if (variant.highPrice < lowPrice) {
              setLowPrice(variant.highPrice);
            }

            if (variant.highPrice > highPrice) {
              setHighPrice(variant.highPrice);
            }
          }
        })
      : undefined;
  }, [product]);

  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));

  const imgWidth = matchesXS
    ? '20rem'
    : matchesSM
    ? '20rem'
    : matchesMD
    ? '20rem'
    : matchesLG
    ? '20rem'
    : matchesXL
    ? '20rem'
    : '20rem';

  const ImageButton = styled(Fab)(({ theme }) => ({
    // borderRadius: '50px',
  }));

  const handleGotoProduct = (slug) => (e) => {
    router.push(`/product/${slug}`);
  };

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Card sx={{ width: imgWidth }} elevation={5}>
          <CardActionArea onClick={handleGotoProduct(prod.slug)}>
            <Card
              elevation={0}
              sx={{
                width: imgWidth,
                background: `url(${CardBG.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <Image src={prod.img} alt="item" width={250} height={250} />
                </Grid>
              </Grid>
            </Card>

            <CardContent>
              <Grid
                container
                justifyContent="center"
                direction="column"
                alignItems="center"
                spacing={4}
              >
                <Grid item>
                  <Typography
                    variant="body2"
                    sx={(theme) => ({
                      fontWeight: '400',
                      fontSize: '1.2rem',
                      color: theme.palette.common.lightGray,
                    })}
                  >
                    {prod.name}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                    }}
                  >
                    ${lowPrice} ~ ${highPrice}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {sale ? (
        <Grid item>
          <Card
            sx={{
              width: imgWidth,
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              background:
                'linear-gradient(125deg, rgba(234,11,160,1) 0%, rgba(234,11,160,0.7) 100%)',
            }}
          >
            <Typography
              textAlign={'center'}
              sx={{ fontSize: '1.1rem', color: 'white' }}
            >
              Items On Sale!
            </Typography>
          </Card>
        </Grid>
      ) : (
        <></>
      )}

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
