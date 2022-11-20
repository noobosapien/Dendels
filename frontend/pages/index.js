import { useEffect } from 'react';
import Layout from '../components/Layout';
import { setDebug } from '../helpers/setDebug';
import styles from '../styles/Home.module.css';

import Hero from '../components/Home/Hero';
import Categories from '../components/Home/Categories';
import Featured from '../components/Home/Featured';
import Promo from '../components/Home/Promo';
import Bundles from '../components/Home/Bundles';
import Latest from '../components/Home/Latest';
import GiftSets from '../components/Home/GiftSets';
import Subscribe from '../components/Home/Subscribe';

export default function Home({ featured, promo }) {
  useEffect(() => {
    const sendDebug = async () => {
      try {
        setDebug({
          isMobile:
            window && window.navigator
              ? window.navigator.userAgentData?.mobile
              : '',
        });
      } catch (e) {
        console.log(e);
      }
    };

    sendDebug();
  }, []);

  return (
    <Layout title="Dendels" description={'Dendels hand crafted and delivered'}>
      {/* Hero */}
      <Hero />
      {/* Bundles */}
      <Bundles bundles={featured} />
      {/* Categories */}
      <Categories />
      {/* Special promo */}
      <Promo products={promo} />
      {/* Subscribe */}
      <Subscribe />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      process.env.STRAPI_BASE + 'dendels-bundles?featured=true'
    );
    const featured = await res.json();

    const res2 = await fetch(
      process.env.STRAPI_BASE + 'dendels-products?promo=true'
    );
    const promo = await res2.json();

    return {
      props: {
        featured,
        promo,
      },
    };
  } catch (e) {}
}
