import { useEffect } from 'react';
import Layout from '../components/Layout';
import { setDebug } from '../helpers/setDebug';
import styles from '../styles/Home.module.css';

export default function Home({ featured }) {
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
    <Layout
      title="Dendels"
      description={'Dendels hand crafted and delivered'}
    ></Layout>
  );
}

// export async function getStaticProps() {
//   try {
//     const res = await fetch(process.env.STRAPI_BASE + 'products?featured=true');
//     const featured = await res.json();

//     return {
//       props: {
//         featured,
//       },
//     };
//   } catch (e) {}
// }
