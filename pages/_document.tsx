import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Old glass negatives found in the family attic"
          />
          <meta property="og:site_name" content="tranchart.alleywayapps.com" />
          <meta
            property="og:description"
            content="Old glass negatives found in the family attic"
          />
          <meta property="og:title" content="Plaques famile Tranchart" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Plaques famile Tranchart" />
          <meta
            name="twitter:description"
            content="Old glass negatives found in the family attic"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
