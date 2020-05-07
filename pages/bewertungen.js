import Head from "next/head";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Bewertungen = () => (
  <div>
    <Head>
      <title>Aust Umzüge und Haushaltsauflösungen</title>
    </Head>

    <div className="hero-head-bewertungen">
      <div className="heading">
        <h1>WAS SAGEN UNSERE KUNDEN</h1>
        <p>EHRLICHES FEEDBACK VON UNSEREN KUNDEN</p>
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
    <section className="feedback">
      <h2>Feedback von Check24</h2>
      <div className="underline"></div>
      <div className="main">
        <div className="card">
          <p>Marina G.</p>
          <div className="stars">
            <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <br />
          <br />
          <p>
            Alles wirklich top verlaufen!!! Das Team war sehr freundlich,
            hilfsbereit und professionell! Ein besonderer Dank an den Chef für
            eine schnelle, unkomplizierte Abwicklung und einen stressfreien
            Umzug . Vielen Dank!!!
          </p>
          <br />
          <br />
          <br />
        </div>
        <div className="card">
          <p>Alfred M.</p>
          <div className="stars">
            <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <br />
          <br />
          <p>
            Sehr empfehlenswert. Herr Aust und sein 5 köpfiges Team war sehr
            zuvorkommend und engagiert. Im Rahmen meines Umzuges von Hildesheim
            nach Hannover standen mir seine Dienste zu Verfügung. Herr Aust hat
            mir einen unverbindlichen Kostenvorschlag zukommenlassen welche sich
            nur geringfügig von der Realität abwich. Am meisten gefiel mir seine
            Spontanität, innerhalb von einer halben Stunde konnten wir uns
            einigen. MfG
          </p>
          <br />
          <br />
          <br />
        </div>
        <div className="card">
          <p>Sergej R.</p>
          <div className="stars">
            <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <br />
          <br />
          <p>
            Die Empfehlung habe ich von meinem Bruder bekommen . Die
            Entrümpelung war genauestens geplant. Einige der gut erhaltenen
            Gegenstände wurden gegen den Preis gerechnet. Den Schlüssel habe ich
            Herrn Aust bedenkenlos überlassen. Alles super geklappt , empfehle
            ich gerne weiter.
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <a
        className="button"
        href="https://profis.check24.de/profil/aust-umzuge-haushaltsauflosungen/qyekqm"
        target="_blank"
        rel="noreferrer"
      >
        Alle Bewertungen von Check24
      </a>
    </section>
    <section className="feedback">
      <h2>Feedback von Google</h2>
      <div className="underline"></div>
      <div className="main">
        <div className="card">
          <p>Pawel S.</p>
          <div className="stars">
            <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>{" "}
          <br />
          <br />
          <p>
            Herr Aust ist gut per Whatsapp oder Telefon zu erreichen. Der Preis
            war im Vergleich zu anderen Anbietern gut und wir haben zügig einen
            Kostenvoranschlag bekommen. Somit haben wir sehr schnell einen
            Termin vereinbaren können und innerhalb kürzester Zeit könnte er
            unsere Küche entrümpeln und auf der Deponie entsorgen. Sehr
            professionell. Kann ich nur weiterempfehlen.
          </p>
          <br />
          <br />
          <br />
        </div>
        <div className="card">
          <p>Mathias M.</p>
          <div className="stars">
            <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <br />
          <br />
          <p>
            Junger Unternehmer, der seine Arbeit sehr gewissenhaft, schnell und
            zuverlässig erledigt. Fairer Preis, zeitnahe Absprache und schnelle
            Erledigung. Bei mir wurde eine Wohnung aufgelöst, was Herr Aust und
            sein Team sehr schnell erledigt haben. Danke dafür. Sehr zu
            Empfehlen und weiterhin viel Erfolg.
          </p>
          <br />
          <br />
          <br />
        </div>
        <div className="card">
          <p>Julia Prang</p>
          <div className="stars">
            <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>{" "}
          <br />
          <br />
          <p>
            Sehr pünktliche und zuverlässige Abwicklung, ein rücksichtsvolles
            Team und ein guter Preis. Gerne wieder!
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <a
        className="button"
        href="https://www.google.com/search?q=aust+umz%C3%BCge+%26+haushaltsaufl%C3%B6sungen&rlz=1C1CHBF_dePH862PH862&oq=aust+umz%C3%BCge+%26+haushalt&aqs=chrome.1.69i57j69i59l2j0j69i60l3.5309j0j7&sourceid=chrome&ie=UTF-8#lrd=0x47baaf2ef7d8bbb1:0x385bbbee5ac8beb0,1,,,"
        target="_blank"
        rel="noreferrer"
      >
        Alle Bewertungen von Google
      </a>
    </section>
  </div>
);

export default Bewertungen;
