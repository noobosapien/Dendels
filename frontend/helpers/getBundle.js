import axios from 'axios';

export async function getBundleInfo(id) {
  try {
    const { data } = await axios.get(
      `https://cms.puppetinos.com/dendels-bundles?id=${id}`

      //   `http://localhost:1337/dendels-bundles?id=${id}`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
