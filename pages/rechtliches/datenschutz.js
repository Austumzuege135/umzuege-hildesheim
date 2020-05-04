import Head from "next/head";
import Link from "next/link";

const Datenschutz = () => (
  <div>
    <Head>
      <title></title>
    </Head>
    <div className="hero-head-impressum">
      <div className="heading">
        <h1>DATENSCHUTZ</h1>
        <p>WIR RESPEKTIEREN IHRE PRIVATSPHÄRE</p>
      </div>
    </div>
    <div className="seperator">
      <h3>
        <Link href="/kostenloses-angebot">
          <a title="Zum kostenlosen Angebot">
            <img
              src="/static/img/message-icon.png"
              alt="Schreiben Sie uns eine Nachricht"
            />
            Kostenloses Angebot erhalten
          </a>
        </Link>
      </h3>
    </div>
  </div>
);

export default Datenschutz;
