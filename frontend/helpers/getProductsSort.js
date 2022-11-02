import axios from 'axios';

export async function getProducts(
  sort,
  param,
  featured,
  sale,
  promo,
  type,
  setAllProducts
) {
  try {
    const { data } = await axios.get(
      'http://localhost:1337/' +
        // 'https://cms.puppetinos.com/' +
        `dendels-products?dendels_category.name_contains=${param}&_sort=${
          sort.method
        }:${sort.asc ? 'ASC' : 'DESC'}${!featured ? '&featured=false' : ''}${
          !promo ? '&promo=false' : ''
        }${!sale ? '&onSale=false' : ''}${type !== 'All' ? `&type=${type}` : ''}
        `
    );

    const products = data;
    // console.log(res);

    console.log('From sort', products);

    setAllProducts(products);
  } catch (e) {
    console.log(e);
  }
}
