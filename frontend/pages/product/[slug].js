import {
  Alert,
  AlertTitle,
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Collapse,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Controller, useForm } from 'react-hook-form';
import { setReview } from '../../helpers/setReview';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import SmallProductCard from '../../components/common/SmallProductCard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Reviews from '../../components/Product/Reviews';
import InfoTable from '../../components/Product/InfoTable';
import { Store } from '../../utils/store';
import { getProductInfo } from '../../helpers/getProductInfo';
import { setDebug } from '../../helpers/setDebug';
import Message from '../../components/common/Message';
import VariantGrid from '../../components/Product/VariantGrid';
import Returns from '../../components/Product/Returns';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';

export default function ProductPage(props) {
  const { product } = props;

  const { state, dispatch } = useContext(Store);

  const [openMessage, setOpenMessage] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(1);
  const [variant, setVariant] = useState({});
  const [image, setImage] = useState('');

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [showRelated, setShowRelated] = useState(true);
  const [update, setUpdate] = useState(1);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const prodInfo = product instanceof Array && product.length ? product[0] : {};

  useEffect(() => {
    // console.log('related product: ', product[0]);
    if (
      product[0].dendels_variants instanceof Array &&
      product[0].dendels_variants.length > 0
    ) {
      setVariant(product[0].dendels_variants[0]);
    }
  }, [product]);

  useEffect(() => {
    if (variant.images instanceof Array && variant.images.length > 0) {
      setImage(variant.images[0].url);
    }
  }, [variant]);

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/[e\+\-]/gi, '1');
    setAmount(value);
  };

  const handleAddAmount = (e) => {
    setAmount(Number(amount) + 1);
  };

  const handleDownAmount = (e) => {
    if (Number(amount) > 1) setAmount(Number(amount) - 1);
  };

  const handleAddToCart = (e) => {
    if (amount === '') {
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
          ...product[0],
          variant,
          img: image,
          quantity: 1,
        },
      });
    } else {
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
          ...variant,
          img: image,
          quantity: amount,
        },
      });
    }

    setOpenMessage(true);
  };

  return (
    <Layout title={prodInfo.name} description={prodInfo.description}>
      <Grid
        container
        justifyContent="space-evenly"
        spacing={4}
        sx={{
          marginTop: '2rem',
        }}
      >
        {/* image */}
        <Grid
          item
          sx={{
            marginBottom: '2rem',
            marginTop: '2rem',
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
              top: matchesMD ? '-2rem' : '-2rem',
              left: matchesMD ? '-2rem' : '-2rem',
              borderRadius: '70% 80% 50% 70%',
            }}
          ></div>
          {image !== '' ? (
            <Image
              width={matchesMD ? 320 : 600}
              height={matchesMD ? 320 : 600}
              src={image}
            />
          ) : (
            <></>
          )}

          <div
            style={{
              width: matchesMD ? 260 : 400,
              height: matchesMD ? 160 : 250,
              position: 'absolute',
              background:
                'linear-gradient(125deg, rgba(255,217,112,0.1) 0%, rgba(255,217,112,0.2) 100%)',
              top: matchesMD ? 230 : 430,
              left: matchesMD ? 100 : 300,
              borderRadius: '70% 90% 100% 70%',
              zIndex: '-10',
            }}
          ></div>
        </Grid>

        {/* details */}
        <Grid item lg={4}>
          <Grid container direction="column" spacing={6}>
            {/* varient */}
            <Grid item>
              <Typography variant="h4" sx={{ marginBottom: '-1rem' }}>
                Variants:
              </Typography>
            </Grid>
            <Grid item>
              <VariantGrid
                variant={variant}
                setVariant={setVariant}
                product={product}
              />
            </Grid>

            {/* name */}
            <Grid item>
              <Typography variant="h3">{variant.name}</Typography>
            </Grid>
            {/* price */}

            {variant.sale ? (
              <Grid item container alignItems="center" spacing={4}>
                <Grid item>
                  <Typography
                    variant="h3"
                    sx={{ textDecoration: 'line-through', fontSize: '1.5rem' }}
                  >
                    NZ${' '}
                    {variant && variant.highPrice
                      ? variant.highPrice.toFixed(2)
                      : '0.00'}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: '600',
                      fontSize: '1.5rem',
                    }}
                  >
                    NZ${' '}
                    {variant && variant.lowPrice
                      ? variant.lowPrice.toFixed(2)
                      : '0.00'}
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: '600',
                    fontSize: '1.5rem',
                  }}
                >
                  NZ${' '}
                  {variant && variant.highPrice
                    ? variant.highPrice.toFixed(2)
                    : '0.00'}
                </Typography>
              </Grid>
            )}

            {/* desc */}
            <Grid item sx={{ marginTop: '2rem' }}>
              <Typography variant="h6">{prodInfo.description}</Typography>
            </Grid>

            <Grid item sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    {variant.data instanceof Array ? (
                      variant.data.map((vari) => (
                        <TableRow component={'th'} scope="row">
                          <TableCell>{vari.name}</TableCell>
                          <TableCell align="right">{vari.value}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <></>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            {/* add to cart */}
            {matchesMD ? (
              <></>
            ) : (
              <>
                <Grid item container alignItems="center" spacing={3}>
                  <Grid item>
                    <Typography sx={{ fontSize: '1rem', fontWeight: '700' }}>
                      Qty:
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconButton
                          onClick={handleDownAmount}
                          color="primary"
                          aria-label="increase quantity"
                          component="span"
                        >
                          <ArrowCircleDownTwoToneIcon
                            sx={(theme) => ({
                              color: theme.palette.common.lightRed,
                              fontSize: '2rem',
                            })}
                          />
                        </IconButton>
                      </Grid>

                      <Grid item>
                        <TextField
                          onChange={handleNumberChange}
                          value={amount}
                          variant="outlined"
                          type="number"
                          size="small"
                          sx={{
                            width: '11ch',
                            'input::-webkit-inner-spin-button': {
                              '-webkit-appearance': 'none',
                              margin: 0,
                            },

                            'input[type=number]': {
                              '-moz-appearance': 'textfield',
                              'font-size': '1.2rem',
                              'text-align': 'center',
                              color: '#3a8783',
                            },
                          }}
                        />
                      </Grid>

                      <Grid item>
                        <IconButton
                          onClick={handleAddAmount}
                          color="primary"
                          aria-label="decrease quantity"
                          component="span"
                        >
                          <ArrowCircleUpTwoToneIcon
                            sx={(theme) => ({
                              fontSize: '2rem',
                            })}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Button
                      onClick={handleAddToCart}
                      startIcon={<LocalMallTwoToneIcon />}
                      variant="contained"
                    >
                      Add to bag
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}

            <Grid item>
              <Returns />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} />

        <Grid item>
          <Typography sx={{ fontSize: '1.2rem' }}>
            You might also like:
          </Typography>
        </Grid>
        <Grid item xs={12} />

        <Grid
          item
          container
          justifyContent="space-evenly"
          alignItems="center"
          spacing={10}
        >
          {/* similar items */}
          {product instanceof Array &&
          product[0].dendels_products instanceof Array &&
          product[0].dendels_products.length > 0 ? (
            product[0].dendels_products.map((prod) => (
              <Grid item>
                <SmallProductCard product={prod} />
              </Grid>
            ))
          ) : (
            <></>
          )}

          {product instanceof Array &&
          product[0].related_products instanceof Array &&
          product[0].related_products.length > 0 ? (
            product[0].related_products.map((prod) => (
              <Grid item>
                <SmallProductCard product={prod} />
              </Grid>
            ))
          ) : (
            <></>
          )}
        </Grid>

        <Grid item xs={12} />
        {/* <Grid item>
          <Typography>Reviews:</Typography>
        </Grid>

        <Grid item xs={12} />
        <Grid item>
          <Reviews product={product[0]} />
        </Grid> */}
      </Grid>

      <Message
        text="Item added to bag!"
        severity="success"
        open={openMessage}
        setOpen={setOpenMessage}
      />

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <AppBar
          position="fixed"
          // color="primary"
          sx={{ top: 'auto', bottom: 0, background: 'rgba(248,99,198,0.95)' }}
        >
          <Toolbar>
            <Grid
              container
              spacing={2}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <IconButton
                      onClick={handleDownAmount}
                      color="secondary"
                      aria-label="increase quantity"
                      component="span"
                    >
                      <ArrowCircleDownTwoToneIcon />
                    </IconButton>
                  </Grid>

                  <Grid item>
                    <TextField
                      onChange={handleNumberChange}
                      value={amount}
                      variant="outlined"
                      type="number"
                      size="small"
                      sx={{
                        width: '7ch',
                        'input::-webkit-inner-spin-button': {
                          '-webkit-appearance': 'none',
                          margin: 0,
                        },

                        'input[type=number]': {
                          '-moz-appearance': 'textfield',
                          'font-size': '1.2rem',
                          color: '#523C0',
                          'text-align': 'center',
                        },
                      }}
                    />
                  </Grid>

                  <Grid item>
                    <IconButton
                      onClick={handleAddAmount}
                      color="secondary"
                      aria-label="decrease quantity"
                      component="span"
                    >
                      <ArrowCircleUpTwoToneIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Button
                  onClick={handleAddToCart}
                  startIcon={<LocalMallTwoToneIcon />}
                  variant="contained"
                  color="secondary"
                >
                  Add to bag
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch(process.env.STRAPI_BASE + `dendels-products`);
    const products = await res.json();

    const names = [];
    products.forEach((prod) => {
      names.push('/product/' + prod.slug); //This has the first letter capital
    });

    return {
      paths: names,
      fallback: true,
    };
  } catch (e) {}
}

export async function getStaticProps(context) {
  try {
    const { params } = context;
    const { slug } = params;

    var param = slug.toLowerCase();

    const res = await fetch(
      process.env.STRAPI_BASE + `dendels-products?slug=${param}`
    );
    const product = await res.json();
    // console.log(product);

    return {
      props: {
        product,
      },
    };
  } catch (e) {
    console.log(e);
  }
}
