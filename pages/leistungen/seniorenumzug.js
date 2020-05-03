import Link from "next/link";
import Head from "next/head";

const Seniorenumzug = () => (
  <div>
    <Head></Head>
    <div className="hero-head-seniorenumzug">
      <div className="heading">
        <h1>Seniorenumzug</h1>
        <p>Sie planen einen Umzug im hohen Alter oder für Ihre Eltern?</p>
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
        Kompetent, schnell und zum festen Preis, damit Sie oder Ihre Eltern sich
        auf das neue zu Hause freuen können.
      </h2>
      <br />
      <br />
      <p>
        Ein Umzug ist Ihnen zu viel und Sie schaffen diesen körperlich nicht? So
        geht es sehr vielen Menschen, vor allem Menschen höheren Alters,
        Senioren die alleine leben. Doch das ist kein Problem, denn hier helfen
        und beraten wir Sie gerne, um Ihren Seniorenumzug für Sie so angenehm
        wie möglich zu gestalten. Bei Seniorenumzügen ist es wichtig, dass ein
        Umzug möglichst stressfrei abläuft. Wir führen seit vielen Jahren
        erfolgreich Seniorenumzüge in Hildesheim und Umgebung durch, von klein
        bis groß. Wir bieten Ihnen einen zuverlässigen Umzugsservice für Ihren
        Umzug zu einem fairen Preis! Mit Aust Umzüge sorgenfrei in einen neuen
        Lebensabschnitt.
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Alle Leistungen zum fairen Preis für Ihren Seniorenumzug</h3>
      <br />
      <br />
      <p>
        Ob ein kleiner oder großer Umzug in Hildesheim, jeder Seniorenumzug ist
        anders und stellt uns immer wieder vor neue Herausforderungen. Das
        können die örtlichen Gegebenheiten sein, wie eine Dachgeschosswohnung
        ohne Fahrstuhl oder es gibt keine Parkmöglichkeit vor der Haustür für
        den Umzugswagen. Manchmal ist es aber auch der Auszug aus dem geliebten
        Zuhause. Wir wissen, dass Seniorenumzüge oft nicht ganz freiwillig sind
        und führen diese nicht nur professionell durch, sondern auch mit dem
        nötigen Fingerspitzengefühl. Unsere fleißigen und freundlichen
        Umzugshelfer gehen mit Ihnen und Ihrem Hab und Gut sehr behutsam um. Wir
        liefern Ihnen auf Wunsch auch Umzugsmaterial, wie Umzugskartons,
        Kleiderboxen und Polstermaterial bis in die Wohnung und entsorgen nach
        dem Umzug das genutzte Umzugsmaterial ordnungsgemäß für Sie. Neben dem
        Verpacken des Umzugsguts, dem Sichern der Möbel und den Transport,
        übernehmen wir auf Wunsch auch die Einrichtung einer Halteverbotszone am
        Umzugstag.
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Angebot mit Festpreisgarantie</h3>
      <br />
      <br />
      <p>
        Gerne erstellen wir Ihnen vorab ein kostenloses und unverbindliches
        Angebot für Ihren Seniorenumzug mit Festpreisgarantie. Planen Sie mit
        uns und setzen Sie auf einen stressfreien Umzug zum fairen Preis. Wir
        garantieren Ihnen nicht nur einen professionellen Umzugsservice, sondern
        auch einen günstigen Preis. Fordern Sie jetzt telefonisch oder online
        Ihr Umzugsangebot bei uns an!
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

export default Seniorenumzug;
