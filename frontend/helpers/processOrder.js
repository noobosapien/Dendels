import axios from 'axios';

export async function processOrder(details) {
  try {
    const { data } = await axios.post(
      `https://cms.puppetinos.com/dendels-orders/process`,
      // `http://localhost:1337/dendels-orders/process`,
      details
    );
    return data;
  } catch (e) {
    console.log(e);
  }
}
