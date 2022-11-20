import {
  Avatar,
  Badge,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../../utils/store';
import DirectionsBoatFilledOutlinedIcon from '@mui/icons-material/DirectionsBoatFilledOutlined';
import { getProductInfo } from '../../helpers/getProductInfo';
import { getBundleInfo } from '../../helpers/getBundle';

export default function SideCart({ shipping, order }) {
  const { state, dispatch } = useContext(Store);
  const [items, setItems] = useState([]);
  const [allBundles, setAllBundles] = useState([]);
  const [shippingOption, setShippingOption] = useState({});

  const {
    cart: { cartItems, bundles },
  } = state;

  useEffect(() => {
    const getItemsFromServer = async () => {
      if (order && order.items) {
        if (order.shippingInfo.firstName) {
          var allItems = [];
          const parsed = order.items;
          const parsedShipping = order.shippingOption;

          if (parsed instanceof Array) {
            for (var i = 0; i < parsed.length; i++) {
              const product = await getProductInfo(parsed[i].id);
              product[0].quantity = parsed[i].quantity;
              product[0].img = product[0].images[0].url;

              allItems.push(product[0]);
            }
          }

          setItems([...allItems]);
          setShippingOption(parsedShipping);
        } else {
          var allItems = [];
          const parsed = JSON.parse(order.items);
          const parsedShipping = JSON.parse(order.shippingOption);

          if (parsed instanceof Array) {
            for (var i = 0; i < parsed.length; i++) {
              const product = await getProductInfo(parsed[i].id);

              product[0].quantity = parsed[i].quantity;
              product[0].img = product[0].images[0].url;

              allItems.push(product[0]);
            }
          }

          setItems([...allItems]);
          setShippingOption(parsedShipping);
        }
      }
    };

    //implement later
    const getBundlesFromServer = async () => {
      if (order && order.bundles) {
        var _allBundles = [];
        const parsed =
          typeof order.bundles === 'string'
            ? JSON.parse(order.bundles)
            : order.bundles
            ? order.bundles
            : [];
        const parsedShipping =
          typeof order.shippingOption === 'string'
            ? JSON.parse(order.shippingOption)
            : order.shippingOption
            ? order.shippingOption
            : {};

        if (parsed instanceof Array) {
          for (var i = 0; i < parsed.length; i++) {
            const bundle = await getBundleInfo(parsed[i].id);

            bundle[0].img = bundle[0].image;
            _allBundles.push(bundle[0]);
          }
        }

        setAllBundles([..._allBundles]);
        setShippingOption(parsedShipping);
      }
    };

    getBundlesFromServer();
    getItemsFromServer();
  }, [order]);

  return (
    <>
      <Card variant="outlined" sx={{ border: 0 }}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <List
              sx={{
                width: '100%',
                bgcolor: 'background.paper',
                zIndex: 0,
              }}
            >
              {order ? (
                <>
                  {items.map((item) => (
                    <React.Fragment key={item.id}>
                      <ListItem
                        secondaryAction={
                          <Typography sx={{ fontSize: '1.5rem' }}>
                            $
                            {(
                              (item.sale ? item.lowPrice : item.highPrice) *
                              item.quantity
                            ).toFixed(2)}
                          </Typography>
                        }
                      >
                        <ListItemAvatar>
                          <Badge
                            badgeContent={item.quantity}
                            color="primary"
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                          >
                            <Avatar
                              src={item.img}
                              alt={item.name}
                              sx={{ width: 100, height: 100 }}
                            ></Avatar>
                          </Badge>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.name}
                          secondary={
                            item.sale
                              ? `Each: $${item.lowPrice.toFixed(2)}`
                              : `Each: $${item.highPrice.toFixed(2)}`
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}

                  {allBundles.map((item) => (
                    <React.Fragment key={item.id}>
                      <ListItem
                        secondaryAction={
                          <Typography sx={{ fontSize: '1.5rem' }}>
                            ${item.lowPrice.toFixed(2)}
                          </Typography>
                        }
                      >
                        <ListItemAvatar>
                          <Badge
                            badgeContent={'Bundle'}
                            color="secondary"
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                          >
                            <Avatar
                              src={item.img.url}
                              alt={item.name}
                              sx={{ width: 100, height: 100 }}
                            ></Avatar>
                          </Badge>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.name}
                          secondary={`Each: $${item.lowPrice.toFixed(2)}`}
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <React.Fragment key={`${item.id}_`}>
                      <ListItem
                        key={item.id}
                        secondaryAction={
                          <Typography sx={{ fontSize: '1.5rem' }}>
                            $
                            {(
                              (item.sale ? item.lowPrice : item.highPrice) *
                              item.quantity
                            ).toFixed(2)}
                          </Typography>
                        }
                      >
                        <ListItemAvatar>
                          <Badge
                            badgeContent={item.quantity}
                            color="primary"
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                          >
                            <Avatar
                              src={item.img}
                              alt={item.name}
                              sx={{ width: 100, height: 100 }}
                            ></Avatar>
                          </Badge>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.name}
                          secondary={
                            item.sale
                              ? `Each: $${item.lowPrice.toFixed(2)}`
                              : `Each: $${item.highPrice.toFixed(2)}`
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}

                  {bundles.map((bundle) => (
                    <React.Fragment key={bundle.id}>
                      <ListItem
                        key={bundle.id}
                        secondaryAction={
                          <Typography sx={{ fontSize: '1.5rem' }}>
                            ${bundle.lowPrice.toFixed(2)}
                          </Typography>
                        }
                      >
                        <ListItemAvatar>
                          <Badge
                            badgeContent={'Bundle'}
                            color="secondary"
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                          >
                            <Avatar
                              src={bundle.image.url}
                              alt={bundle.name}
                              sx={{ width: 100, height: 100 }}
                            ></Avatar>
                          </Badge>
                        </ListItemAvatar>
                        <ListItemText
                          primary={bundle.name}
                          secondary={`Each: $${bundle.lowPrice.toFixed(2)}`}
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </>
              )}
            </List>
          </Grid>

          {order ? (
            <>
              <Grid item alignSelf="center">
                <Paper
                  variant="outlined"
                  sx={(theme) => ({
                    padding: '1rem',
                    background: shipping
                      ? theme.palette.common.white
                      : theme.palette.common.darkGray,
                  })}
                >
                  <Typography
                    variant="h5"
                    sx={(theme) => ({
                      fontFamily: 'Montserrat',
                      fontSize: shipping ? '1.2rem' : '1.4rem',
                    })}
                  >
                    Subtotal: $
                    {(
                      items.reduce(
                        (a, c) =>
                          a + c.quantity * (c.sale ? c.lowPrice : c.highPrice),
                        0
                      ) + allBundles.reduce((a, c) => a + c.lowPrice, 0)
                    ).toFixed(2)}
                  </Typography>
                </Paper>
              </Grid>
            </>
          ) : cartItems.length || bundles.length ? (
            <>
              <Grid item alignSelf="center">
                <Paper
                  variant="outlined"
                  sx={(theme) => ({
                    padding: '1rem',
                    background: shipping
                      ? theme.palette.common.white
                      : theme.palette.common.darkGray,
                  })}
                >
                  <Typography
                    variant="h5"
                    sx={(theme) => ({
                      fontFamily: 'Montserrat',
                      fontSize: shipping ? '1.2rem' : '1.4rem',
                    })}
                  >
                    Subtotal: $
                    {(
                      cartItems.reduce(
                        (a, c) =>
                          a + c.quantity * (c.sale ? c.lowPrice : c.highPrice),
                        0
                      ) + bundles.reduce((a, c) => a + c.lowPrice, 0)
                    ).toFixed(2)}
                  </Typography>
                </Paper>
              </Grid>
            </>
          ) : (
            <></>
          )}

          {order ? (
            <>
              <Grid item alignSelf="center">
                <Grid container spacing={2}>
                  <Grid item>
                    <DirectionsBoatFilledOutlinedIcon sx={(theme) => ({})} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      Shipping:{' '}
                      {shippingOption.label === 'standard' ? '$5.00' : '$20.00'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item alignSelf="center">
                <Paper
                  variant="outlined"
                  sx={(theme) => ({
                    padding: '1rem',
                    background: theme.palette.common.darkGray,
                  })}
                >
                  <Typography
                    variant="h5"
                    sx={(theme) => ({
                      fontFamily: 'Montserrat',
                    })}
                  >
                    Total: $
                    {(
                      items.reduce(
                        (a, c) =>
                          a + c.quantity * (c.sale ? c.lowPrice : c.highPrice),
                        0
                      ) +
                      allBundles.reduce((a, c) => a + c.lowPrice, 0) +
                      (shippingOption.label === 'standard' ? 5 : 20)
                    ).toFixed(2)}
                  </Typography>
                </Paper>
              </Grid>
            </>
          ) : shipping && (cartItems.length || bundles.length) ? (
            <>
              <Grid item alignSelf="center">
                <Grid container spacing={2}>
                  <Grid item>
                    <DirectionsBoatFilledOutlinedIcon sx={(theme) => ({})} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      Shipping: {shipping === 'standard' ? '$5.00' : '$20.00'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item alignSelf="center">
                <Paper
                  variant="outlined"
                  sx={(theme) => ({
                    padding: '1rem',
                    background: theme.palette.common.darkGray,
                  })}
                >
                  <Typography
                    variant="h5"
                    sx={(theme) => ({
                      fontFamily: 'Montserrat',
                    })}
                  >
                    Total: $
                    {(
                      cartItems.reduce(
                        (a, c) =>
                          a + c.quantity * (c.sale ? c.lowPrice : c.highPrice),
                        0
                      ) +
                      bundles.reduce((a, c) => a + c.lowPrice, 0) +
                      (shipping === 'standard' ? 5 : 20)
                    ).toFixed(2)}
                  </Typography>
                </Paper>
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Grid>
      </Card>
    </>
  );
}
