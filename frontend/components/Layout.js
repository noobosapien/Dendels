import React, { useContext, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Alert,
  AppBar,
  Button,
  Collapse,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Grid,
  Tooltip,
  Link,
  Badge,
  Paper,
  Divider,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Close from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchDialog from './common/SearchDialog';
import { useRouter } from 'next/router';
import { Store } from '../utils/store';
import ContactForm from './common/ContactForm';

const LogoButton = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '2.5rem !important',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem !important',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem !important',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '4rem !important',
  },

  // top: '1rem',
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  // [theme.breakpoints.up('xs')]: {
  //   width: '32px !important',
  // },
  // [theme.breakpoints.up('sm')]: {
  //   width: '32px !important',
  // },
  // [theme.breakpoints.up('md')]: {
  //   width: '32px !important',
  // },
  // [theme.breakpoints.up('lg')]: {
  //   width: '32px !important',
  // },
  // top: '1rem',
}));

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const { cart } = state;
  const [openSearch, setOpenSearch] = useState(false);

  const openSearchHandler = (e) => {
    setOpenSearch(true);
  };

  return (
    <>
      <Head>
        <title>{title ? `${title}` : 'Dendels'}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <SearchDialog openSearch={openSearch} setOpenSearch={setOpenSearch} />

      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar disableGutters>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{
              margin: '1rem',
            }}
          >
            <Grid item>
              <>
                <LogoButton
                  variant="h3"
                  sx={{
                    fontWeight: '200',
                    cursor: 'pointer',
                  }}
                  color="primary"
                  onClick={(e) => router.push('/')}
                >
                  Dendels
                </LogoButton>
              </>
            </Grid>

            <Grid item>
              <Stack alignItems="center" direction="row" spacing={1}>
                <Tooltip title="Search">
                  <NavButton onClick={openSearchHandler} size="large">
                    <SearchIcon
                      sx={(theme) => ({
                        [theme.breakpoints.up('lg')]: {
                          fontSize: '3.0rem',
                        },
                        [theme.breakpoints.down('lg')]: {
                          fontSize: '2.5rem',
                        },
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '1.5rem',
                        },
                      })}
                    />
                  </NavButton>
                </Tooltip>

                <Tooltip title="Bag">
                  <NavButton onClick={(e) => router.push('/bag')}>
                    {cart.cartItems.length ? (
                      <Badge
                        color="primary"
                        badgeContent={cart.cartItems.length}
                        showZero
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        overlap="circular"
                      >
                        <ShoppingBagIcon
                          sx={(theme) => ({
                            [theme.breakpoints.up('lg')]: {
                              fontSize: '3.0rem',
                            },
                            [theme.breakpoints.down('lg')]: {
                              fontSize: '2.5rem',
                            },
                            [theme.breakpoints.down('sm')]: {
                              fontSize: '1.5rem',
                            },
                          })}
                        />
                      </Badge>
                    ) : (
                      <>
                        <ShoppingBagIcon
                          sx={(theme) => ({
                            [theme.breakpoints.up('lg')]: {
                              fontSize: '3.0rem',
                            },
                            [theme.breakpoints.down('lg')]: {
                              fontSize: '2.5rem',
                            },
                            [theme.breakpoints.down('sm')]: {
                              fontSize: '1.5rem',
                            },
                          })}
                        />
                      </>
                    )}
                  </NavButton>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* <TopMenu /> */}
      {/* changes */}
      {children}

      <footer
        style={{
          backgroundColor: '#fff',
          // marginTop: '15%',
          paddingTop: '4rem',
          paddingBottom: '4rem',
        }}
      >
        {/* <Divider sx={{ marginBottom: '1rem' }} /> */}

        <Grid container alignItems="center">
          <Grid item container alignItems="center" direction="column" md={4}>
            <ContactForm />
          </Grid>

          <Grid item container direction="column" alignItems="center" md={4}>
            <Grid item>
              <NextLink href="/about">
                <Typography
                  href="/about"
                  variant="body2"
                  sx={{
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                  }}
                >
                  What is Dendels?
                </Typography>
              </NextLink>
            </Grid>

            <Grid item>
              <NextLink href="/privacy">
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                  }}
                >
                  Privacy
                </Typography>
              </NextLink>
            </Grid>

            <Grid item>
              <NextLink href="/terms">
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                  }}
                >
                  Terms & Conditions
                </Typography>
              </NextLink>
            </Grid>

            <Grid item>
              <NextLink href="/refunds">
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                  }}
                >
                  Returns & Refunds
                </Typography>
              </NextLink>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
