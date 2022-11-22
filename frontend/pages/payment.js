import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Store } from '../utils/store';
import CheckoutWizard from '../components/Checkout/CheckoutWizard';
import { useRouter } from 'next/router';
import ShowBaggedItems from '../components/Checkout/ShowBaggedItems';
import { Box } from '@mui/system';
import SideCart from '../components/Checkout/SideCart';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from '../components/Payment/PaymentCard';

// const stripePromise = loadStripe(
//   'pk_test_51LxN8jA2zx4WKMEf8lGT5U1pn1qYbM3vEW9JehjXQqlvJOB7g9H00pH4jUMOKVOxDvzUYDek0x4e48O4Lv4w5rkW00JKDuOMRY'
// );

const stripePromise = loadStripe(
  'pk_live_51LxN8jA2zx4WKMEfzBA3YG4dQeBvgZXPuz01pY7ZkIdOgyPkie0ay1ubdsEnLaUJQpHK1KKLWlbZOMvvumYcWKeQ00cjYTrIfd'
);

export default function Checkout() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const [shipping, setShipping] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    cart: {
      cartItems,
      bundles,
      shippingAddress,
      shippingCountry,
      shippingMethod,
    },
  } = state;

  useEffect(() => {
    setShipping(shippingMethod.value);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (cartItems.length < 1 && bundles.length < 1) {
        router.push('/bag');
      }

      const keys = Object.keys(shippingAddress);

      for (var i = 0; i < keys.length; i++) {
        if (!shippingAddress[keys[i]].valid) {
          router.push('/checkout');
        }
      }

      if (shippingCountry.value === '') {
        router.push('/checkout');
      }

      if (shippingMethod.value === '') {
        router.push('/shipping');
      }
    }
  }, [cartItems, shippingAddress, shippingCountry, shippingMethod, loading]);

  return (
    <Layout>
      <Grid
        container
        justifyContent="center"
        alignItems="space-evenly"
        direction="column"
        spacing={4}
      >
        <Grid item>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <ShowBaggedItems shipping={shipping} />
          </Box>
        </Grid>

        <Grid item>
          <CheckoutWizard activeStep={2} />
        </Grid>

        <Grid item>
          <Grid container alignItems="center" justifyContent="space-evenly">
            <Grid item xs={12} md={5} lg={4}>
              <Elements stripe={stripePromise}>
                <PaymentCard loading={loading} setLoading={setLoading} />
              </Elements>
            </Grid>

            <Grid item md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <SideCart shipping={shipping} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
