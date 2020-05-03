import Link from "next/link";
import Head from "next/head";

const Firmenumzug = () => (
  <div>
    <Head></Head>
    <div className="hero-head-firmenumzug">
      <div className="heading">
        <h1>FIRMENUMZUG</h1>
        <p>
          SCHNELL UND STRESSFREI, DAMIT SIE SICH UM IHR BUSINESS KÜMMERN KÖNNEN
        </p>
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
    <div className="wrapper">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>
        Kompetent, schnell und zum festen Preis, damit Sie sich ohne
        Unterbrechung um Ihre Geschäfte kümmern können
      </h2>
      <br />
      <br />
      <p>
        Sie suchen ein seriöses und zuverlässiges Umzugsunternehmen für Ihren
        Firmenumzug in Hildesheim? Dann sind Sie hier bei Aust Umzüge genau
        richtig. Denn wir sind ein professionelles Umzugsunternehmen aus
        Hildesheim für Firmenumzüge aller Art in der gesamten Region. Ein
        erfahrenes und seriöses Umzugsunternehmen für einen Firmenumzug zu
        finden, ist wirklich nicht einfach. Denn das Angebot auf dem Markt ist
        groß und die angebotenen Leistungen ganz unterschiedlich. Einen
        korrekten Vergleich der Anbieter mit dem gleichen
        Preis-Leistungs-Verhältnis zu machen, ist da nicht leicht. Sparen Sie
        sich die mühevolle Arbeit und fordern Sie bei uns Ihr kostenloses
        Umzugsangebot an. Wir bieten Ihnen einen zuverlässigen Umzugsservice zu
        einem fairen Preis!
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Alle Leistungen für Ihren Firmenumzug</h3>
      <br />
      <br />
      <p>
        Ob ein Umzug mit einem kleinen Familienunternehmen oder ein komplexer
        Firmenumzug mit Produktionsstraßen, Werkstätten und Lagerhallen, wir
        erledigen Umzüge aller Art von klein bis groß. Jeder Umzug stellt uns
        vor neue Herausforderungen, die wir dank unserer jahrelangen Erfahrung
        und einem perfekt eingespieltem Team problemlos meistern! Meistens ist
        es der Zeitdruck wegen des kleinen Zeitfensters. Denn während eines
        Firmenumzugs steht die Arbeit still, dass bedeutet Umsatzverlust für das
        Unternehmen. Damit Ihr Betrieb schnell wieder weiter läuft, ohne große
        Ausfallzeiten, garantieren wir Ihnen einen schnellen Umzug innerhalb des
        vorgegebenen Zeitfensters. Für uns gehören solche Herausforderungen zum
        Tagesgeschäft. Wir haben schon unzählige Firmenumzüge in und um
        Hildesheim realisiert und bieten Ihnen nicht nur fleißige und
        ortskundige Umzugshelfer sowie den Transport, sondern auch das
        Umzugsmaterial. Denn wir liefern Ihnen auf Wunsch auch die
        Umzugskartons, Polstermaterial und Packband bis in die Firma und
        entsorgen nach dem Umzug das genutzte Umzugsmaterial ordnungsgemäß für
        Sie.
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Kostenloses Angebot mit Festpreisgarantie</h3>
      <br />
      <br />
      <p>
        Für Ihre finanzielle Planung erhalten Sie von uns kostenlose und
        unverbindliche Angebote mit Festpreisgarantie für Ihren Firmenumzug. Wir
        garantieren Ihnen nicht nur einen schnellen und professionellen
        Umzugsservice, sondern auch einen fairen Preis. Fordern Sie jetzt Ihr
        Umzugsangebot bei uns an!
      </p>
      <br />
      <br />
      <br />
      <br />
      <Link href="/leistungen">
        <a
          className="button"
          title="Zurück zu Leistungen für Umzüge und Haushaltsauflösungen"
        >
          <b>Zurück zur Übersicht</b>
        </a>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link href="/kostenloses-angebot">
        <a
          className="button"
          title="Kostenlosees Angebot für Ihren Privatumzug"
        >
          <b>Zum kostenlosen Angebot</b>
        </a>
      </Link>
      <br />
      <br />
      <br />
    </div>
  </div>
);

export default Firmenumzug;
