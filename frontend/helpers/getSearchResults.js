import axios from 'axios';

export async function getSearchResults(query) {
  try {
    const { data } = await axios.get(
      `https://cms.dendels.com/products?${query}&_limit=5`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
