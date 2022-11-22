import React from 'react';
import Layout from '../components/Layout';

export default function Refunds() {
  return (
    <Layout>
      <div style={{ padding: '3rem', fontSize: '1rem' }}>
        <h1>RETURN POLICY</h1>

        <p>
          Thank you for your purchase. We hope you are happy with your purchase.
          However, if you are not completely satisfied with your purchase for
          any reason, you may return it to us for
        </p>

        <h3>RETURNS</h3>

        <p>
          All returns must be postmarked within 14 days of the purchase date.
          All returned items must be in new and unused condition, with all
          original tags and labels attached.
        </p>

        <h3>RETURN PROCESS</h3>

        <p>
          To return an item, please email customer service at hi@dendels.co.nz
          to obtain a Return Merchandise Authorization (RMA) number, place the
          item securely in it's original packaging and mail your return to the
          following address:
        </p>

        <p>
          <p>Dendels</p>
          <p style={{ marginTop: '-1rem' }}>Attn: Returns</p>
          <p style={{ marginTop: '-1rem' }}>RMA#</p>
          <p style={{ marginTop: '-1rem' }}>7 Lockington Avenue,</p>
          <p style={{ marginTop: '-1rem' }}>Henderson, Auckland 0612,</p>
          <p style={{ marginTop: '-1rem' }}>Auckland, New Zealand</p>
        </p>

        <p>
          Please note, you will be responsible for all return shipping charges.
          We strongly recommend that you use a trackable method to mail your
          return.
        </p>

        <h3>REFUNDS</h3>

        <p>
          After receiving your return and inspecting the condition of your item,
          we will process your return or exchange. Refunds may take 1-2 billing
          cycles to appear on your credit card statement, depending on your
          credit card company. We wiil notify you by email when your return has
          been processed.
        </p>

        <h3>EXCEPTIONS</h3>

        <p>
          For defective or damaged products, please contact us at the contact
          details below to arrange a refund or exchange.
        </p>

        <h3>QUESTIONS</h3>

        <p>
          If you have any questions concerning our return policy, please contact
          us at:
        </p>

        <h4>hi@dendels.co.nz</h4>
      </div>
    </Layout>
  );
}
