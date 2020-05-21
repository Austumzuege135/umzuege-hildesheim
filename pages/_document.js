import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="de">
        <Head>
          <script
            type="text/javascript"
            src="/static/javascript/cookie.js"
            defer
          ></script>
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `document.addEventListener('DOMContentLoaded', function () {
              cookieconsent.run({"notice_banner_type":"interstitial","consent_type":"express","palette":"light","change_preferences_selector":"#changePreferences","language":"de","website_name":"Aust Umzüge & Haushaltsauflösungen"});
          });`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/plain"
            cookie-consent="strictly-necessary"
          ></script>
          <script
            type="text/plain"
            cookie-consent="functionality"
            defer
          ></script>
          <script type="text/plain" cookie-consent="tracking" defer></script>
          <script type="text/plain" cookie-consent="targeting" defer></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
