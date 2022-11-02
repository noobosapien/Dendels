import {
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import MenuSort from './MenuSort';
import SelectType from './SelectType';
import ShowItemsCB from './ShowItemsCB';

export default function MenuPaper({
  handleSortChange,
  handleFeaturedChange,
  handlePromoChange,
  handleSaleChange,
  allTypes,
  type,
  setType,
}) {
  return (
    <>
      <Card
        sx={{
          // height: '10rem',
          minWidth: '100vw',
          border: '0',
        }}
        elevation={0}
      >
        <Divider />
        <CardContent>
          <Grid container direction="column" spacing={6}>
            <Grid
              item
              container
              alignItems="center"
              justifyContent="center"
              spacing={10}
            >
              {/* Sort */}
              <Grid item>
                <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                  Sort by:
                </Typography>
              </Grid>
              <Grid item>
                <MenuSort handleSortChange={handleSortChange} />
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={4}
            >
              {/* Show Items */}
              <Grid item>
                <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                  Show items:
                </Typography>
              </Grid>

              <Grid item>
                <ShowItemsCB
                  handleFeaturedChange={handleFeaturedChange}
                  handlePromoChange={handlePromoChange}
                  handleSaleChange={handleSaleChange}
                />
              </Grid>
            </Grid>

            <Grid
              item
              container
              alignItems="center"
              justifyContent="center"
              spacing={10}
            >
              {/* Type */}

              <Grid item>
                <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                  Type:
                </Typography>
              </Grid>

              <Grid item>
                <SelectType allTypes={allTypes} type={type} setType={setType} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </>
  );
}
