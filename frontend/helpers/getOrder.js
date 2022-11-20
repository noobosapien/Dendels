import axios from 'axios';

export async function getOrder(link, auth) {
  try {
    const { data } = await axios.post(
      `https://cms.puppetinos.com/dendels-orders/getOrder?order=${link}&auth=${auth}`
      // `http://localhost:1337/dendels-orders/getOrder?order=${link}&auth=${auth}`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
