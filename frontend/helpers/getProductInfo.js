import axios from 'axios';

export async function getProductInfo(id) {
  try {
    const { data } = await axios.get(
      `https://cms.puppetinos.com/dendels-variants?id=${id}`

      // `http://localhost:1337/dendels-variants?id=${id}`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
