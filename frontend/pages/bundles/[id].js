import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import CardBG from '../../public/cardbg.png';
import { useTheme } from '@mui/material/styles';
import SmallProductCard from '../../components/common/SmallProductCard';
import { Store } from '../../utils/store';
import { getAllVariants } from '../../helpers/getVariants';
import Message from '../../components/common/Message';

export default function Bundle({ bundle, variants }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const { state, dispatch } = useContext(Store);
  const [update, setUpdate] = useState(0);
  const [openMessage, setOpenMessage] = useState(false);

  const selectVariant = (variant, product) => (e) => {
    for (var i = 0; i < variants.length; i++) {
      if (variants[i][0].product === product) {
        for (var j = 0; j < variants[i][0].variants.length; j++) {
          variants[i][0].variants[j].selected = false;
        }
      }
    }

    variant.selected = true;
    setUpdate(update + 1);
  };

  const addToBag = (e) => {
    const selectedVariants = [];

    for (var i = 0; i < variants.length; i++) {
      for (var j = 0; j < variants[i][0].variants.length; j++) {
        if (variants[i][0].variants[j].selected) {
          selectedVariants.push(variants[i][0].variants[j]);
        }
      }
    }

    bundle.dendels_variants = [...selectedVariants];

    dispatch({
      type: 'BUNDLES_ADD_ITEM',
      payload: {
        ...bundle,
      },
    });

    setOpenMessage(true);
  };

  return (
    <>
      <Layout>
        <Grid
          container
          sx={{
            marginTop: '2rem',
          }}
          justifyContent="space-evenly"
          spacing={2}
        >
          <Grid container item md={5} direction="column" spacing={4}>
            <Grid item>
              <Image
                src={bundle && bundle.image ? bundle.image.url : CardBG.src}
                width={matchesMD ? 320 : 600}
                height={matchesMD ? 320 : 600}
              />
            </Grid>

            <Grid item alignSelf="flex-start">
              <Typography sx={{ fontWeight: '400', fontSize: '1.2rem' }}>
                Variants:
              </Typography>
            </Grid>

            <Grid item container direction="column" spacing={6}>
              {variants?.map((object) => (
                <Grid
                  key={`pro${object[0].product}`}
                  item
                  container
                  spacing={4}
                  justifyContent="center"
                >
                  {/* {console.log('OBJ: ', object[0].variants)} */}
                  {object[0].variants?.map((variant) => (
                    <React.Fragment key={variant.id}>
                      <Grid item>
                        <Card
                          sx={{
                            boxShadow: variant.selected
                              ? '4px 2px 2px #EA0BA0'
                              : '',
                          }}
                        >
                          <CardActionArea
                            onClick={selectVariant(variant, object[0].product)}
                          >
                            <Image
                              src={variant.images[0].url}
                              width={60}
                              height={60}
                            />
                          </CardActionArea>
                        </Card>
                      </Grid>
                      <Grid item>
                        <Divider />
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item md={5}>
            <Grid container direction="column" spacing={8} alignItems="center">
              <Grid item>
                <Typography
                  sx={{
                    fontSize: '1rem',
                  }}
                >
                  Products included:
                </Typography>
              </Grid>

              <Grid container item spacing={10} justifyContent="space-evenly">
                {bundle?.dendels_products instanceof Array &&
                  bundle.dendels_products?.map((prod) => (
                    <Grid item key={`__${prod.id}`}>
                      <SmallProductCard small product={prod} />
                    </Grid>
                  ))}
              </Grid>

              <Grid item alignSelf="flex-start">
                <Typography
                  sx={{
                    fontSize: '1rem',
                  }}
                >
                  {bundle?.description}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '1.2rem',
                  }}
                >
                  Bundle worth: ${bundle?.highPrice.toFixed(2)}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.4rem',
                  }}
                >
                  Bundle price: ${bundle?.lowPrice.toFixed(2)}
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  sx={{ width: '20rem' }}
                  onClick={addToBag}
                >
                  Add to bag
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Message
          text="Bundle added to bag!"
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
                <Grid item container xs={6} spacing={1} alignItems="center">
                  <Grid item>
                    <Typography>Price:</Typography>
                  </Grid>

                  <Grid item>
                    <Typography>
                      <s>${bundle?.highPrice.toFixed(2)}</s>
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography sx={{ fontSize: '1rem', fontWeight: '600' }}>
                      ${bundle?.lowPrice.toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={5}>
                  <Button
                    fullWidth
                    color="secondary"
                    variant="contained"
                    onClick={addToBag}
                  >
                    Add to bag
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch(process.env.STRAPI_BASE + `dendels-bundles`);
    const bundles = await res.json();

    const names = [];
    bundles.forEach((bundle) => {
      names.push('/bundles/' + bundle.slug); //This has the first letter capital
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
    const { id } = params;

    var param = id.toLowerCase();

    const res = await fetch(
      process.env.STRAPI_BASE + `dendels-bundles?slug=${param}`
    );
    const bundle = (await res.json())[0];
    const variants = [];

    if (bundle?.dendels_products instanceof Array) {
      for (var i = 0; i < bundle.dendels_products.length; i++) {
        const vars = await getAllVariants(bundle.dendels_products[i]._id);

        const obj = {
          product: bundle.dendels_products[i]._id,
          variants: [...vars],
          selected: false,
        };

        const array = [];
        for (var j = 0; j < variants.length; j++) {
          if (variants[j].product === obj.product) {
            array.push(variants[j]);
          }
        }

        if (array.length === 0) {
          variants.push([...array, obj]);
        }
      }
    }

    variants.forEach((variant) => {
      variant[0].variants[0].selected = true;
    });

    return {
      props: {
        bundle,
        variants,
      },
    };
  } catch (e) {
    console.log(e);
  }
}
