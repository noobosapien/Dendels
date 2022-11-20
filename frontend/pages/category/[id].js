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

  const { products, category, param } = props;

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [allTypes, setAllTypes] = useState([]);

  const [allProducts, setAllProducts] = useState([]);
  const [sort, setSort] = useState({
    method: 'name',
    asc: true,
  });

  const [featured, setFeatured] = useState(true);
  const [sale, setSale] = useState(true);
  const [promo, setPromo] = useState(true);

  const [type, setType] = useState('All');

  useEffect(() => {
    setAllProducts(products);
  }, [products]);

  // console.log('Outside: ', category);

  useEffect(() => {
    if (category && category.types) {
      try {
        const typesJSON = JSON.parse(category.types);
        setAllTypes(['All', ...typesJSON]);
      } catch (e) {
        console.log(e);
      }
    }
  }, [category]);

  useEffect(() => {
    getProducts(sort, param, featured, sale, promo, type, setAllProducts);
  }, [sort, param, featured, sale, promo, type]);

  const handleSortChange = (value) => {
    setSort(value);
  };

  const handleFeaturedChange = (value) => {
    setFeatured(value);
  };

  const handleSaleChange = (value) => {
    setSale(value);
  };

  const handlePromoChange = (value) => {
    setPromo(value);
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
            <MenuPaper
              handleSortChange={handleSortChange}
              handleFeaturedChange={handleFeaturedChange}
              handlePromoChange={handlePromoChange}
              handleSaleChange={handleSaleChange}
              allTypes={allTypes}
              type={type}
              setType={setType}
            />
          </Collapse>
        </Grid>

        {/* Products */}
        <Grid item container justifyContent="space-evenly" spacing={10}>
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

    const res2 = await fetch(
      process.env.STRAPI_BASE + `dendels-categories?name_contains=${param}`
    );

    const cat = await res2.json();

    return {
      props: {
        products,
        param,
        category: cat instanceof Array ? cat[0] : {},
      },
    };
  } catch (e) {
    console.log(e);
  }
}
