import axios from 'axios';

export async function getAllVariants(product) {
  try {
    const { data } = await axios.get(
      'https://cms.puppetinos.com/' +
        `dendels-variants?dendels_product=${product}`
    );

    const variants = data;

    return variants;
  } catch (e) {
    console.log(e);
  }
}
