import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { getProducts } from '../../helpers/getProductsSort';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Collapse, Grid, Typography } from '@mui/material';
import ProductCard from '../../components/common/ProductCard';
import MobileMenu from '../../components/common/MobileMenu';
import MenuPaper from '../../components/common/MenuPaper';

export default function Category(props) {
  const [openMenu, setOpenMenu] = useState(false);

  const { products, param } = props;

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [allProducts, setAllProducts] = useState([]);
  const [sort, setSort] = useState({
    method: 'name',
    asc: true,
  });

  useEffect(() => {
    setAllProducts(products);
    console.log(products);
  }, [products]);

  useEffect(() => {
    getProducts(sort, param, setAllProducts);
  }, [sort]);

  const handleStateChange = (method) => (e) => {
    if (sort.method !== method) {
      setSort({
        method,
        asc: true,
      });
    } else {
      setSort({ ...sort, asc: !sort.asc });
    }
  };

  return (
    <Layout title="Dendels" description={'Dendels'}>
      <Grid
        container
        sx={{ marginTop: '2rem', marginBottom: '2rem' }}
        direction="column"
        alignItems="center"
        spacing={6}
      >
        <Grid item container justifyContent="space-around">
          <Grid item>
            <Typography variant="h4">{param}</Typography>
          </Grid>

          <Grid item>
            <MobileMenu setOpenMenu={setOpenMenu} />
          </Grid>
        </Grid>

        <Grid item>
          <Collapse in={openMenu}>
            <MenuPaper />
          </Collapse>
        </Grid>

        {/* Products */}
        <Grid item container justifyContent="space-evenly">
          {allProducts instanceof Array &&
            allProducts.map((prod) => {
              return (
                <>
                  <Grid item>
                    <ProductCard product={prod} />
                  </Grid>
                </>
              );
            })}
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch(process.env.STRAPI_BASE + `dendels-categories`);
    const categories = await res.json();

    const names = [];
    categories.forEach((cat) => {
      names.push('/category/' + cat.name); //This has the first letter capital
    });

    return {
      paths: names,
      fallback: true,
    };
  } catch (e) {
    throw e;
  }
}

export async function getStaticProps(context) {
  try {
    const { params } = context;
    const { id } = params;

    var param = id.charAt(0).toUpperCase() + id.slice(1).toLowerCase();
    // param = 'Clean Living';

    const res = await fetch(
      process.env.STRAPI_BASE +
        `dendels-products?dendels_category.name_contains=${param}&_sort=name:DESC`
    );

    const products = await res.json();

    return {
      props: {
        products,
        param,
      },
    };
  } catch (e) {
    console.log(e);
  }
}
