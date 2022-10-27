import axios from 'axios';

export async function placeOrder(details) {
  try {
    const { data } = await axios.post(
      // `https://cms.puppetinos.com/orders/place`,
      `http://localhost:1337/dendels-orders/place`,
      details
    );
    return data;
  } catch (e) {
    console.log(e);
  }
}
