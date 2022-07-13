import React from 'react';
import { DefaultSeo } from 'next-seo';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo
        title="Thanathip.Dev"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.thanathip.com/',
          site_name: 'Thanathip.Dev',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
