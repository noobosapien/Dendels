import axios from 'axios';

export async function getSearchResults(query) {
  try {
    const { data } = await axios.get(
      `https://cms.puppetinos.com/dendels-products?${query}&_limit=5`
      // `http://localhost:1337/dendels-products?${query}&_limit=5`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
